import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../App.css';
import { fetchMovie } from '../actions';

class Table extends Component {

    componentDidMount (){
        this.props.fetchMovie();
    }

    render() {
        const data= this.props.movies.map((movies)=>{
            return (
                <tr>
                    <td>{movies.name}</td>
                    <td>{movies.yearOfRelease}</td>
                    <td>{movies.plot}</td>
                </tr>
            )
        })

        console.log('Table component',this.props.movies);
        return (
            <div>
                <table id="customers">
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Year Of Release
                        </th>
                        <th>
                            plot
                        </th>
                    </tr>
                    {data}
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        movies: state
    }
}

const mapDispatchToProps = (dispatch)=>{
    fetchMovie()
}

export default connect(mapStateToProps,mapDispatchToProps)(Table);