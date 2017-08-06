import React from 'react';

const MainVideo = ({video}) => {
  if(!video){
    return <div>Loading baby</div>
  }
  const videoId = video.id.videoId
  const videoUrl = `https://www.youtube.com/embed/${videoId}`
  const title = video.snippet.title;
  const description = video.snippet.description

  return (
    <div className="col-md-8">
      <div className="embed-responsive embed-responsive-4by3">
        <iframe className="embed-responsive-item" src={videoUrl} height="500px" width="100%"></iframe>
      </div>
      <h2 className="main-title">{title}</h2>
      <p>{description}</p>
    </div>    
  )
  
}

export default MainVideo