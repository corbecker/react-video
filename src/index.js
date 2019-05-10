
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';

// Create a new component and this componenet should produce some html.
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({key: process.env.API_KEY, term: 'surfing'}, (videos) => {
      this.setState({ videos })
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

// Insert the generated component HTML into the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));