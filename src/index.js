import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBOSmKNexx-kHG4fVLKXG33e5WfLyeriPc';
import YTSearch from 'youtube-api-search';
import VideoList from './components/Video_List';
import VideoDetail from './components/Video_Detail';


class App extends Component{
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({key:API_KEY, term: 'flicker'} , (videos_data) => {
          this.setState({ videos: videos_data});
          //which is this.setState({ videos: videos}); only works key name==property name
        });
  }
  render() {
    return(
      <div>
      <SearchBar/>
      <VideoDetail video={this.state.videos[0]} />
      <VideoList videos={this.state.videos}/>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
