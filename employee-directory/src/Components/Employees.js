import React, { Component } from 'react';
import API from "../utils/API";
import Table from "./Table"

class Employees extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            search: "",
            searchedEmployees: [],
        }
    }
    componentDidMount() {
        API.getRandomEmployees().then(results => { this.setState({ employees: results.data.results, searchedEmployees: results.data.results }) })
    }
    // Ask tutor about sort or map
    sortByEmail = () => {
        let search = this.state.searchedEmployees;
        if (this.state.order === "asc") {
            const searchResults = search.sort((a, b) => (a.email > b.email) ? 1 : -1)
            this.setState({
                searchedEmployees: searchResults,
                order: "desc"
            })
        } else {

            let searchResults = search.sort((a, b) => (a.email > b.email) ? -1 : 1)
            this.setState({
                searchedEmployees: searchResults,
                order: "asc"
            })

        }
    }
    sortByName = () => {
        let search = this.state.searchedEmployees;
        if (this.state.order === "asc") {
            let searchResults = search.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            this.setState({
                searchedEmployees: searchResults,
                order: "desc"
            })
        } else {
            let searchResults = search.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
            this.setState({
                searchedEmployees: searchResults,
                order: "asc"
            })

        }
    }

    // Even though I use set state in componentDidMount, it only renders once. 
    handleInputChange = event => {

        const employees = this.state.employees;
        const searchTerm = event.target.value;
        const searchedEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        )
        this.setState({
            searchedEmployees,

        });


    };
    employeeSearch = () => {
        API.getUsers()
            .then(res => this.setState({
                searchedEmployees: res.data.results,
                employees: res.data.results
            }))
            .catch(err => console.log(err))
    }
    handleSearch = event => {
        event.preventDefault();
        if (!this.state.search) {
            alert("Please enter a name or email address")
        }
        const { employees, search } = this.state;
        const searchedEmployees = employees.filter(employee => employee.name.first.toLowerCase().includes(search.toLowerCase()));

        this.setState({
            searchedEmployees
        });
    }

    render() {
        return (
            <div>
                <Table state={this.state.searchedEmployees} sortByName={this.sortByName} sortByEmail={this.sortByEmail} />
            </div>
        );
    }
}



export default Employees;