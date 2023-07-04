import { useMemo } from "react";
import { usePubSub, useMeeting, useParticipant, MeetingProvider,Constants } from "/src/imports.js"
;

const useIsRecording = () => {
  const { recordingState } = useMeeting();

  const isRecording = useMemo(
    () =>
      recordingState === Constants.recordingEvents.RECORDING_STARTED ||
      recordingState === Constants.recordingEvents.RECORDING_STOPPING,
    [recordingState]
  );

  return isRecording;
};

export default useIsRecording;
