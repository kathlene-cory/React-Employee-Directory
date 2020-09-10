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

    handleSearch = event => {
        event.preventDefault();
        // if (!this.state.search) {
        //     alert("Please enter a name or email address")
        // }
        const { employees, search } = this.state;
        const searchedEmployees = employees.filter(employee => employee.name.first.toLowerCase().includes(event.target.value.toLowerCase()));

        this.setState({
            searchedEmployees
        });
    }
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

    sortByFirstName = () => {
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
    sortByLastName = () => {
        let search = this.state.searchedEmployees;
        if (this.state.order === "asc") {
            let searchResults = search.sort((a, b) => (a.name.first > b.name.last) ? 1 : -1)
            this.setState({
                searchedEmployees: searchResults,
                order: "desc"
            })
        } else {
            let searchResults = search.sort((a, b) => (a.name.first > b.name.last) ? -1 : 1)
            this.setState({
                searchedEmployees: searchResults,
                order: "asc"
            })

        }
    }
    render() {
        return (
            <div>
                <div className="row">
                    <input className="col s10" type="text" placeholder="Search here or click on any of the filters below" onChange={this.handleSearch} />
                    <span className="material-icons col s2">
                        person_search
                    </span>
                </div>

                <Table employees={this.state.searchedEmployees} sortByEmail={this.sortByEmail} sortByFirstName={this.sortByFirstName} sortByLastName={this.sortByLastName} />
            </div>
        );
    }
}



export default Employees;

          // Ask tutor about sort or map



    // // Even though I use set state in componentDidMount, it only renders once. 
    // handleInputChange = event => {

    //     const employees = this.state.employees;
    //     const searchTerm = event.target.value;
    //     const searchedEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    //     )
    //     this.setState({
    //         searchedEmployees,

    //     });


    // };

    // employeeSearch = () => {
    //     API.getRandomUsers()
    //         .then(res => this.setState({
    //             searchedEmployees: res.data.results,
    //             employees: res.data.results
    //         }))
    //         .catch(err => console.log(err))
    // }
