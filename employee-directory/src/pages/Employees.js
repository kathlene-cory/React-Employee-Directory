import React, { Component } from "react";
import API from "../utils/API";

class Employees extends Component {

    employees = {
        location: "",
        email: "",
        login: "",
    }
    componentDidMount() {
        API.getRandomEmployees();
    }












}
export default Employees;