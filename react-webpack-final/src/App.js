import React, { Component } from 'react'
import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';

class App extends Component {

    render() {        
        return (
            <div>
                {/* anuja
                {this.props.movies.name} */}
                <Dashboard/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state
    }
}

export default connect(mapStateToProps)(App);
