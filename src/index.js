
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

// Create a new component and this componenet should produce some html.
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: process.env.API_KEY, term: 'surfing'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0] 
      })
    });
  }

  componentWillMount() {      
    const script = document.createElement('script'); 
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}`;
    document.head.append(script);
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Insert the generated component HTML into the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));