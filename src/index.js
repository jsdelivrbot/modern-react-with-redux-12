import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyB0pSyh3oMzmVYnQXixotLSCuFk-kjRMZQ';

// Create a new Component. This component should produce some HTML

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        videos: [],
        selectedVideo: null
      };

      this.videoSearch('jundiaí');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // setState will cause render method to run again
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }


  // we are passing a function as a property to be used as a callback
  // on (VideoList component onVideoSelect property)
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch }/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

// This is a functional based component
// const App = () => {
//   return (
//     <div>
//       <SearchBar/>
//     </div>
//   );
// }

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
