export interface FetchStreamResponse {
  FetchStreams: FetchStream[]
}

export interface FetchStream {
  id: string
  title: string
  username: string
  game: string
  roomId: string
}
