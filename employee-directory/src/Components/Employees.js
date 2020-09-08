import React, { Component } from 'react';
import API from "../utils/API";

class Employees extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: "",
            name: "",
            email: "",
            location: "",
            login: "",
        }
    }
    componentDidMount() {
        API.getRandomEmployees().then(results => { this.setState({ employees: results.data.results }) })
    }




    render() {
        return (
            <div>
                <div>Employees: {this.state.employees}</div>
                <div>Name: {this.state.name}</div>
                <div>Email: {this.state.email} </div>
                <div>Location: {this.state.location}</div>
                <div>Login: {this.state.login}</div>
            </div>
        );
    }
}



export default Employees;