import React, { Component} from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      input:'',
      search: ''
    }
    this.searchInput = this.searchInput.bind(this)
  }

  searchInput(searched){
    this.setState({search: searched})
    this.props.searchFunction(searched)
  }

  render(){
    return(
      <div className="col-xs-12 searchBar">
        <input 
          placeholder="Search for a video or Band" 
          className="form-control" value={this.state.search} 
          onChange={e => this.searchInput(e.target.value)} />
      </div>
    )
  } 
}