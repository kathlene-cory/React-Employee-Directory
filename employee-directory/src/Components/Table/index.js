import React, { Component } from "react";

class Table extends Component {
    render() {
        return (

            <table className="striped responsive-table" >
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th onClick={this.props.sortbyName}>Name</th>
                        <th>Location</th>
                        <th onClick={this.props.sortbyEmail}>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {console.log(this.props.state)}
                    <tr>
                        <th>Picture: {this.props.state.picture}</th>
                        <td>Name: {this.props.state.name}</td>
                        <td>Name: {this.props.state.location}</td>
                        <td>Email: {this.props.state.email}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
export default Table;