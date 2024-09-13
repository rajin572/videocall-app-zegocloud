import VideoCall from "@/components/VideoCall";

const Room = ({ params }) => {
  const roomID = params.id;

  return (
    <div>
      <VideoCall roomID={roomID} />
    </div>
  );
};

export default Room;
