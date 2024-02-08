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
                {id: 1, name: 'John', salary: 1000, increase: false, favourite: false},
                {id: 2, name: 'Alex', salary: 3000, increase: false, favourite: false},
                {id: 3, name: 'Marat', salary: 800, increase: false, favourite: true},
                {id: 4, name: 'Vlad', salary: 1400, increase: false, favourite: true},
                {id: 5, name: 'Tima', salary: 900, increase: false, favourite: true}
            ],
            term: '',
            filter: 'all'
        }
    }

    deleteEmployees = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    addEmployees = (name, salary) => {
        if (name && salary) {
            const newEmployees = {
                id: new Date().getTime(),
                name: name,
                salary: salary,
                increase: false,
                favourite: false
            }
            this.setState(({data}) => ({
                data: [...data, newEmployees]
            }))
        }
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.toLowerCase().indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'increase':
                return items.filter(item => item.increase)
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state
        const employees = data.length
        const increased = data.filter(item => item.increase).length
        const visibleData = this.filterPost(this.searchEmp(data, term), filter)

        return (
            <>
                <AppInfo employees={employees} increased={increased}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteEmployees}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.addEmployees}/>
            </>
        )
    }
}

export default App;