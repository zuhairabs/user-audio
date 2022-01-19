// This is a light React wrapper around the HTML5 audio tag. It provides the ability to manipulate the player and listen to events through a nice React interface.

import ReactAudioPlayer from "react-audio-player";
import { FiEdit3 } from "react-icons/fi";

function Player({ audio, handleClick }) {
  return (
    <>
      <ReactAudioPlayer src={audio} controls />
      <FiEdit3
        size={35}
        onClick={handleClick}
        className="mt-3 ml-6 bg-gray-200 p-1 rounded-md cursor-pointer hover:bg-gray-300"
      />
    </>
  );
}

export default Player;
