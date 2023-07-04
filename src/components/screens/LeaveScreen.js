export function LeaveScreen({ setIsMeetingLeft }) {
  return (
    <div className="bg-gray-800 h-screen flex flex-col flex-1 items-center justify-center">
      <h1 className="text-white text-4xl">You left the meeting!</h1>
      <div className="mt-12 flex flex-col gap-4">
        {/* <button
          className="w-full bg-purple-400 text-white px-16 py-3 rounded-lg text-sm"
          onClick={() => {
            setIsMeetingLeft(false);
          }}
        >
          Rejoin the Meeting
        </button> */}
        <a
          className="w-full text-center bg-purple-400 text-white px-16 py-3 rounded-lg text-sm"
          href="/"
        >
          Back To Home
        </a>
      </div>
    </div>
  );
}
