import React, { Component } from 'react'
import { connect } from 'react-redux'

class Table extends Component {
    render() {
        console.log(this.props.nameArray);

        return (
            <div>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    {this.props.nameArray.map((post) => (
                        <tr>
                            <td>
                                {post.firstname}
                            </td>
                            <td>
                                {post.lastname}
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        nameArray: state
    }
}

export default connect(mapStateToProps)(Table);
