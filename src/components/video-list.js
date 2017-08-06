import React from 'react';
import VideoListItem from './video-list-item'

const VideoList =({videos, onVideoSelect}) => {
  const videosArray = videos.map(video=> {
    return (
      <VideoListItem 
        key={video.etag} video={video}
        onVideoSelect={onVideoSelect}
      />
    )
  })
  return(
    <ul className="col-md-4">{videosArray}</ul>
  )
}

export default VideoList