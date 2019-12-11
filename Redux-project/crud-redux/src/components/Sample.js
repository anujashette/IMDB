import React, { Component } from 'react'
import { connect } from 'react-redux'
class sample extends Component {

    handleChange = () => {
        let type = ''
        if (this.props.sample.isChange) {
            console.log('true',this.props.sample.isChange);
            
            type = 'PRINT_DATA'
        }
        else {
            console.log('false',this.props.sample.isChange);
            
            type = 'PRINT_DATA_REPEAT'
        }
        this.props.dispatch({
            type:type
        })
    }

    render() {
        return (
            <div>
                <h1>{this.props.sample.firstname}</h1>
                <h1>{this.props.sample.lastname}</h1>
                <button onClick={this.handleChange}>Change Name</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { sample: state };
}

export default connect(mapStateToProps)(sample);