import React, { Component } from 'react';
import API from "../utils/API";

class Employees extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            location: "",
            login: "",
        }
    }
    // This load initial data which above I have set to nothing, but the API has a url for seed data. Will this seed data show after my codeblock above? 
    componentDidMount() {
        API.getRandomEmployees().then(results => { this.setState(results.data.results) })
    }




    render() {
        return (
            <div>
                <div>Name: {this.state.name}</div>
                <div>Email: {this.state.email} </div>
                <div>Location: {this.state.location}</div>
                <div>Login: {this.state.login}</div>
            </div>
        );
    }
}



export default Employees;