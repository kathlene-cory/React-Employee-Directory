import React, { Component } from "react";

class Table extends Component {
    render() {
        return (

            <table className="striped responsive-table" >
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th onClick={this.props.sortbyName}>First Name</th>
                        <th onClick={this.props.sortbyName}>Last Name</th>
                        <th>Location</th>
                        <th onClick={() => this.props.sortByEmail()}>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {console.log(this.props.employees)}

                    {this.props.employees.map(employee =>
                        <tr>
                            <td>{employee.picture.thumbnail}</td>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.location.city}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
}
export default Table;