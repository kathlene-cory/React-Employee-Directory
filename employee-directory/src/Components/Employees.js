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
                <Table />
            </div>
        );
    }
}



export default Employees;