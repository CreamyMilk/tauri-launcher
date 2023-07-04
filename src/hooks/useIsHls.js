import { usePubSub, useMeeting, useParticipant, MeetingProvider,Constants } from "/src/imports.js"
;
import { useMemo } from "react";

const useIsHls = () => {
  const { hlsState } = useMeeting();
  const isHls = useMemo(
    () =>
      hlsState === Constants.hlsEvents.HLS_STARTED ||
      hlsState === Constants.hlsEvents.HLS_PLAYABLE ||
      hlsState === Constants.hlsEvents.HLS_STOPPING,
    [hlsState]
  );

  return isHls;
};

export default useIsHls;
