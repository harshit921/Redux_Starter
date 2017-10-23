import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBOSmKNexx-kHG4fVLKXG33e5WfLyeriPc';
import YTSearch from 'youtube-api-search';



class App extends Component{
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({key:API_KEY, term: 'flicker'} , (videos) => {
          this.setState({ videos});
          //which is this.setState({ videos: videos});
        });
  }
  render() {
    return(
      <div>
      <SearchBar></SearchBar>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
