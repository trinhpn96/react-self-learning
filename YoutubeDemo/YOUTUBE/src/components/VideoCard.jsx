import React from "react";
import { format, render, cancel, register } from "timeago.js";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, type }) => {
  const navigate = useNavigate(); //use it instead of link

  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video: video } });
  };

  const isList = type === "list";

  return (
    <li onClick={handleClick} className={isList ? "flex gap-1 m-2" : "mx-2"}>
      {/* <h1>{video.snippet.title}</h1> */}
      <img
        className={isList ? "w-60 mr-2 rounded-xl" : "w-full rounded-xl"}
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div>
        <h3 className="my-2 line-clamp-2">{video.snippet.title}</h3>
        <p className="text-sm opacity-80">{video.snippet.channelTitle}</p>
        <p className="text-sm opacity-80">
          {format(video.snippet.publishedAt)}
        </p>
      </div>
    </li>
  );
};
export default VideoCard;
