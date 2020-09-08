import React, { Component } from "react";
import Employees from "../Employees";

class Table extends Component {
    constructor(props) {
        super(props)
    }
    // resultsList(props) {
    //     const employees = props.employees;
    //     const employeesList = employees.map((employee) =>
    //         <tr>{employee}</tr>;
    // }


    render() {
        return (
            <table className="striped responsive-table" >
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Location</th>
                        <th>Email</th>
                        <th>Login</th>
                        <th>DOB</th>
                        <th>Registered</th>
                        <th>Phone</th>
                        <th>Cell</th>
                        <th>Id</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th>Picture: {this.state.picture}</th>
                        <td>Name: {this.state.name}</td>
                        <td>Gender: {this.state.gender}</td>
                        <td>Location: {this.state.location}</td>
                        <td>Email: {this.state.email}</td>
                        <td>Login: {this.state.login}</td>
                        <td>DOB: {this.state.dob}</td>
                        <td>Registered: {this.state.registered}</td>
                        <td>Phone: {this.state.phone}</td>
                        <td>Cell: {this.state.cell}</td>
                        <td>Id: {this.state.id}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
export default Table;