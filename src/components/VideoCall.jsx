"use client";

import useUser from "@/hooks/useUser";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React from "react";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/navigation"; // Use this to handle navigation

const VideoCall = ({ roomID }) => {
  const { fullName } = useUser();
  const router = useRouter(); // Initialize the router

  console.log({ fullName, roomID });

  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = parseInt(process.env.NEXT_PUBLIC_ZEGO_APP_ID);
    const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      uuid(),
      fullName || "00000",
      720
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // Start the call and handle room leave event
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Shareable link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      maxUsers: 10,
      onLeaveRoom: () => {
        // Redirect to home page when the call ends
        router.push("/");
      },
    });
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      ref={myMeeting}
    ></div>
  );
};

export default VideoCall;
