import React from "react";
import css from "./YTVideoCard.module.css";

const YTVideoCard = ({
  VideoURL,
  ThumbIMG,
  VideoTitle,
  VideoDuration,
  ViewCount,
  Timestamp,
  ChannelName,
  ChannelAvatar,
}) => {
  return (
    <a className={css.ytVideoCard} href={VideoURL}>
      <div className={css.thumbnailImage}>
        <span className={css.duration}>{VideoDuration}</span>
        <img src={ThumbIMG} alt="Video Thumbnail" />
      </div>
      <div className={css.videoDetails}>
        <img className={css.channelAvatar} src={ChannelAvatar} />
        <div className={css.titleMeta}>
          <h3 className={css.videoTitle}>{VideoTitle}</h3>
          <div className={css.metaData}>
            <div className={css.channel}>
              <span>{ChannelName}</span>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 0C3.65 0 0.5 3.15 0.5 7C0.5 10.85 3.65 14 7.5 14C11.35 14 14.5 10.85 14.5 7C14.5 3.15 11.35 0 7.5 0ZM5.96 10.71L3.02 7.84L4 6.86L5.96 8.75L11 3.78L11.98 4.76L5.96 10.71Z"
                  fill="var(--text-secondary)"
                />
              </svg>
            </div>
            <div className={css.meta}>
              <span>{ViewCount} views</span>
              <span>•</span>
              <span>{Timestamp}</span>
            </div>
          </div>
        </div>
        <a href="#" className={css.contextMenu}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 16.5C13.33 16.5 14 17.17 14 18C14 18.83 13.33 19.5 12.5 19.5C11.67 19.5 11 18.83 11 18C11 17.17 11.67 16.5 12.5 16.5ZM11 12C11 12.83 11.67 13.5 12.5 13.5C13.33 13.5 14 12.83 14 12C14 11.17 13.33 10.5 12.5 10.5C11.67 10.5 11 11.17 11 12ZM11 6C11 6.83 11.67 7.5 12.5 7.5C13.33 7.5 14 6.83 14 6C14 5.17 13.33 4.5 12.5 4.5C11.67 4.5 11 5.17 11 6Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
    </a>
  );
};

export default YTVideoCard;
