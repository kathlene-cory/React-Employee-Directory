import React, { Component } from "react";

class Table extends Component {
    render() {
        return (
            <div className="container">
                <table className="striped responsive-table" >
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th className="blue-text" onClick={() => this.props.sortByFirstName()}>First Name</th>
                            <th className="blue-text" onClick={() => this.props.sortByLastName()}>Last Name</th>
                            <th>Location</th>
                            <th className="blue-text" onClick={() => this.props.sortByEmail()}>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        {console.log(this.props.employees)}

                        {this.props.employees.map(employee =>
                            <tr>
                                <td><img className="responsive-img" src={employee.picture.thumbnail} /></td>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.location.city}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Table;