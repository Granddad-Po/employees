import { Component } from "react";
import AppInfo from "./components/app-info/app-info.jsx";
import SearchPanel from "./components/search-panel/search-panel.jsx";
import AppFilter from "./components/app-filter/app-filter.jsx";
import EmployeesList from "./components/employees-list/employees-list.jsx";
import EmployeesAddForm from "./components/employees-add-form/employees-add-form.jsx";

import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: 'John', salary: 1000, premium: false, favourite: false},
                {id: 2, name: 'Alex', salary: 3000, premium: false, favourite: false},
                {id: 3, name: 'Marat', salary: 800, premium: true, favourite: false},
                {id: 4, name: 'Vlad', salary: 1400, premium: false, favourite: true},
                {id: 5, name: 'Tima', salary: 900, premium: true, favourite: true}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    addItem = (name, salary) => {
        const newEmployees = {
            id: new Date().getTime(),
            name: name,
            salary: salary,
            premium: false,
            favourite: false
        }
        this.setState(({data}) => ({
            data: [...data, newEmployees]
        }))
    }

    render() {
        return (
            <>
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList data={this.state.data} onDelete={this.deleteItem}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </>
        )
    }
}

export default App;