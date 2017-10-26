import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBOSmKNexx-kHG4fVLKXG33e5WfLyeriPc';
import YTSearch from 'youtube-api-search';
import VideoList from './components/Video_List';
import VideoDetail from './components/Video_Detail';
import _ from 'lodash';


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
     };
     this.videoSearch('flicker');
  }

  videoSearch(term) {
    YTSearch({key:API_KEY, term: term} , (videos_data) => {
          this.setState({
            videos: videos_data,
            selectedVideo: videos_data[0],
          });
          //which is this.setState({ videos: videos}); only works key name==property name
        });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return(
      <div>
      <SearchBar onSearchTermChange= {videoSearch}/>
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        videos={this.state.videos}
        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
      />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
