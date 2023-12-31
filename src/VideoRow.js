import React from "react";
import "./VideoRow.css";

function VideoRow({ views, subs, des, timestamp, channel, title, image }) {
  return (
    <div className="VideoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} .{" "}
          <span className="videoRow__subs">
            <span className="videoRow__subsNumber">{subs} </span>
          </span>
          .Subscribers {views} views . {timestamp}
        </p>
        <p className="videoRow__description">{des}</p>
      </div>
    </div>
  );
}

export default VideoRow;
