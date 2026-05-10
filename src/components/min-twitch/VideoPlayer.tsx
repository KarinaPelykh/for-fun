import { useEffect, useRef } from "react";

export const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.log("Camera error:", error);
      }
    };

    startCamera();
  }, []);

  return (
    <div>
      <div className="bg-blue-400 rounded-2xl size-150 relative -z-10 flex justify-center">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          style={{ width: 500 }}
          className=""
        />
      </div>

      <div className=" flex gap-2.5">
        <button onClick={() => videoRef.current?.play()}>Play</button>
        <button onClick={() => videoRef.current?.pause()}>Stop</button>
      </div>
    </div>
  );
};
