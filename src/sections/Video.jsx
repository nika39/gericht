import { useState } from "react";
import { meal } from "../constants";
import classNames from "classnames";
import { useRef } from "react";

function Video() {
  const [playbackStatus, setPlayBackStatus] = useState(false);
  const videoEl = useRef();

  const togglePlayback = () => {
    if (playbackStatus) {
      videoEl.current.pause();
    } else {
      videoEl.current.play();
    }

    setPlayBackStatus(prevState => !prevState);
  };

  return (
    <div className="relative h-screen">
      <button
        className="absolute left-1/2 top-1/2 z-10 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border border-golden"
        onClick={togglePlayback}
      >
        <svg
          className="fill-white text-3xl"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={classNames({ hidden: playbackStatus })}
            d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
          />
          <path
            className={classNames({ hidden: !playbackStatus })}
            d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"
          />
        </svg>
      </button>
      <div className="relative h-full w-full before:absolute before:inset-0 before:bg-black/[.65]">
        <video ref={videoEl} className="h-full w-full object-cover" src={meal} loop></video>
      </div>
    </div>
  );
}

export default Video;
