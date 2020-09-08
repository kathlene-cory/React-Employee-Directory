import React from "react";
import Employees from "../Employees"

function Table(props) {

    return (

        <table className="striped responsive-table" >
            <thead>
                <tr>
                    <th>Picture</th>
                    <th onClick={props.sortbyName}>Name</th>
                    <th>Location</th>
                    <th onClick={props.sortbyEmail}>Email</th>
                </tr>
            </thead>

            <tbody>
                {console.log(this.props.state.name)}
                <tr>
                    <th>Picture: {this.props.state.picture}</th>
                    <td>Name: {this.props.state.name}</td>
                    <td>Location: {this.props.state.location}</td>
                    <td>Email: {this.props.state.email}</td>
                    <td>Login: {this.props.state.login}</td>
                    <td>DOB: {this.props.state.dob}</td>
                    <td>Registered: {this.props.state.registered}</td>
                    <td>Phone: {this.props.state.phone}</td>
                    <td>Cell: {this.props.state.cell}</td>
                    <td>Id: {this.props.state.id}</td>
                </tr>
            </tbody>
        </table>
    )
}
export default Table;