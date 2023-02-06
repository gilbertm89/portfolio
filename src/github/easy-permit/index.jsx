import { VideoPlayer } from "../easy-permit/video-player";

export const EasyPermit = () => {
  return (
    <div className="flex justify-end gap-x-6">
      <div className="flew flex-col basis-1/2 p-14 items-center">
        <p className="text-[24px] text-[#EBF5FF80] text-justify font-medium leading-[32px]">
          <span className="text-white">Easy Permit.</span>
          <br />
          <br /> Allows users to perform building permit searches in real-time.
        </p>
      </div>
      <div className="grow">
        <VideoPlayer
          className="h-[300px]"
          src={require("../../assets/example.mp4")}
          type="video/mp4"
          autoPlay
          muted
        />
      </div>
    </div>
  );
};
