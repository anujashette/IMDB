import React, { Component } from 'react';
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';
import './App.css'
import Sample from './components/Sample';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Post It</h2>
        </div>
        <PostForm />
        {/* <AllPost /> */}
        <Table/>
        {/* <Sample/> */}
      </div>
    );
  }
}
export default App;