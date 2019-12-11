import React from 'react';
import './App.css';
import { fetchDog } from './actions'
import { connect } from 'react-redux';
import Table from './components/Table';
class App extends React.Component {
  render () {    
    return (
      <div>
        {/* <button onClick={() => this.props.dispatch(fetchDog())}>Show Dog</button>
         <button onClick={() => this.props.dispatch(fetchDog())}>Show Dog</button>
          {this.props.loading 
            ? <p>Loading...</p> 
            : this.props.error
                ? <p>Error, try again</p>
                : <p><img src={this.props.url} alt='click button to see dog'/></p>} */}
                <Table/>
      </div>
    )
  }
}

const mapStateToProps=(state) => {
  return state;
}

export default connect(mapStateToProps)(App);