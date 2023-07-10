import { CheckIcon, ClipboardIcon } from "@heroicons/react/outline";
import { usePubSub, useMeeting, useParticipant, MeetingProvider, Constants } from "/src/imports.js"
  ;
import React, { useEffect, useState } from "react";

export function MeetingDetailsScreen({
  onClickJoin,
  _handleOnCreateMeeting,
  participantName,
  setParticipantName,
  videoTrack,
  setVideoTrack,
  onClickStartMeeting,
  setMeetingMode,
  meetingMode,
}) {
  const [studioCode, setStudioCode] = useState("");
  const [isCreating, setIsCreating] = useState(false)
  const [studioCodeError, setStudioCodeError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [iscreateMeetingClicked, setIscreateMeetingClicked] = useState(false);
  const [isJoinMeetingClicked, setIsJoinMeetingClicked] = useState(false);

  useEffect(() => {
    console.log(window.location.href.includes("create=true"));
    if (window.location.href.includes("create=true")) setIsCreating(true)
    else if (window.location.href.includes("id=")) setStudioCode(window.location.href.split("id=")[1])
  }, [])

  return (
    <div
      className={`flex flex-1 flex-col justify-center w-full md:p-[6px] sm:p-1 p-1.5`}
    >
      <a onClick={() => {
        if (!iscreateMeetingClicked && !isJoinMeetingClicked) window.location.assign("./streams")
        else iscreateMeetingClicked ? setIscreateMeetingClicked(false) : setIsJoinMeetingClicked(false)
      }}
        className="my-3 p-3 bg-gray-700 rounded-lg cursor-pointer"><i className="fa-solid fa-arrow-left"></i> Back
      </a>
      {iscreateMeetingClicked ? (
        <div className="border border-solid border-gray-400 rounded-xl px-4 py-3  flex items-center justify-center">
          <p className="text-white text-base">{`Studio code : ${studioCode}`}</p>
          <button
            className="ml-2"
            onClick={() => {
              navigator.clipboard.writeText(studioCode);
              setIsCopied(true);
              setTimeout(() => {
                setIsCopied(false);
              }, 3000);
            }}
          >
            {isCopied ? (
              <CheckIcon className="h-5 w-5 text-green-400" />
            ) : (
              <ClipboardIcon className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      ) : isJoinMeetingClicked ? (
        <>
          <input
            defaultValue={studioCode}
            disabled
            onChange={(e) => {
              setStudioCode(e.target.value);
            }}
            placeholder={"Enter studio code"}
            className="px-4 py-3 bg-gray-900 rounded-xl text-white w-full text-center"
          />
          {studioCodeError && (
            <p className="text-xs text-red-600">
              Please enter valid studioCode
            </p>
          )}
        </>
      ) : null
      }

      {
        (iscreateMeetingClicked || isJoinMeetingClicked) && (
          <>
            <input
              value={participantName}
              disabled
              onChange={(e) => setParticipantName(e.target.value)}
              placeholder="Enter your name"
              className="px-4 py-3 mt-5 bg-gray-900 rounded-xl text-white w-full text-center"
            />
            <button
              className={`w-full ${participantName.length < 3 ? "bg-gray-700" : "bg-purple-400"
                }  text-white px-2 py-3 rounded-xl mt-5`}
              onClick={(e) => {
                if (iscreateMeetingClicked) {
                  if (videoTrack) {
                    videoTrack.stop();
                    setVideoTrack(null);
                  }
                  onClickStartMeeting();
                } else {
                  if (studioCode.match("\\w{4}\\-\\w{4}\\-\\w{4}")) {
                    onClickJoin(studioCode);
                  } else setStudioCodeError(true);
                }
              }}
            >
              {iscreateMeetingClicked
                ? "Start Stream"
                : isJoinMeetingClicked &&
                  meetingMode === Constants.modes.CONFERENCE
                  ? "Join Studio"
                  : "Join Streaming Room"}
            </button>
          </>
        )
      }

      {
        !iscreateMeetingClicked && !isJoinMeetingClicked && (
          <div className="w-full md:mt-0 mt-4 flex flex-col">
            <div className="flex items-center justify-center flex-col w-full">
              {isCreating && <button
                className="w-full bg-purple-400 text-white px-2 py-3 rounded-xl"
                onClick={async (e) => {
                  const studioCode = await _handleOnCreateMeeting();
                  setStudioCode(studioCode);
                  setIscreateMeetingClicked(true);
                  setMeetingMode(Constants.modes.CONFERENCE);
                }}
              >
                Create new Stream
              </button>}

              {/* <button
                className="w-full bg-purple-400 text-white px-2 py-3 mt-5 rounded-xl"
                onClick={async (e) => {
                  setIsJoinMeetingClicked(true);
                  setMeetingMode(Constants.modes.CONFERENCE);
                }}
              >
                Join as a Host
              </button> */}
              {!isCreating && <button
                className="w-full bg-gray-700 text-white px-2 py-3 rounded-xl mt-5"
                onClick={(e) => {
                  setIsJoinMeetingClicked(true);
                  setMeetingMode(Constants.modes.VIEWER);
                }}
              >
                Join as a Viewer
              </button>
              }
            </div>
          </div>
        )
      }
    </div >
  );
}
