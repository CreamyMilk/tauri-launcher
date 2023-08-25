export const GQL = {
  CONNECTION_INIT: 'connection_init',
  CONNECTION_ACK: 'connection_ack',
  CONNECTION_ERROR: 'connection_error',
  CONNECTION_KEEP_ALIVE: 'ka',
  START: 'start',
  STOP: 'stop',
  CONNECTION_TERMINATE: 'connection_terminate',
  DATA: 'data',
  ERROR: 'error',
  COMPLETE: 'complete'
}


export function GetTime() {
  return `
  subscription {
    currentTime
  }`
}



function WSConnectExample() {
  const ws = new WebSocket('ws://localhost:8080/query', "graphql-ws");
  ws.onopen = (e) => {
    console.log("✅ WS connected", e);
    ws.send(JSON.stringify(({ type: GQL.CONNECTION_INIT, payload: {} })))
  }
  ws.onmessage = (e) => {
    const data = JSON.parse(e.data)
    console.log("👀 WS message", data);

    switch (data.type) {
      case GQL.CONNECTION_ACK: {
        console.log("✅ Successfull Init");
        ws.send(JSON.stringify({
          type: GQL.START,
          id: '1',
          payload: { query: GetTime() }
        }))
        break
      }
      case GQL.CONNECTION_ERROR: {
        console.error(data.payload)
        break
      }
      case GQL.CONNECTION_KEEP_ALIVE: {
        break
      }
      case GQL.DATA: {
        console.log(data)
        break
      }
      case GQL.COMPLETE: {
        console.log('completed', data.id)
        break
      }
      default: {
        console.log(e);
      }
    }

  }
  ws.onclose = (e) => {
    console.log("🚨 WS Closed", e);
  }
  ws.onerror = (e) => {
    console.log("❌ WS Error", e);
  }
}