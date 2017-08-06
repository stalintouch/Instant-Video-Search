import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import Youtube from 'youtube-api-search';
import MainVideo from './components/main-video';
import VideoList from './components/video-list'
import _ from 'lodash'
const API = 'AIzaSyDpo9BYr4gcqHNEWhjtINRih_ILLb10yFI'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      videos: [],
      selectedVideo:null,
      term: ''
    }
    this.youtubeSearch('Reactjs')
    
  }
  youtubeSearch(term){
    Youtube({key: API, term: term}, videos => {
      this.setState({videos: videos, selectedVideo: videos[0]})
    })
  }

  render(){
    const videoSearch = _.debounce(term => {this.youtubeSearch(term)}, 300)
    return(
      <div>
        <SearchBar term={this.state.term} searchFunction={videoSearch}/>
        <MainVideo 
          video={this.state.selectedVideo} 
          />
        <VideoList 
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('.container'))