import React from 'react';

const VideoListItem = ({video, onVideoSelect}) =>{
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item li-video-list">
      <div className="video-list media">
          <div className="media-left">
              <img className="img-responsive" src={imageUrl} />
          </div>
          <div className="media-body">
              <div className="media-heading">{title}</div>
          </div>
      </div>   
    </li>    
  )
}

export default VideoListItem