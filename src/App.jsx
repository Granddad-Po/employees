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
            term: ''
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

    render() {
        const {data, term} = this.state
        const employees = data.length
        const increased = data.filter(item => item.increase).length
        const visibleData = this.searchEmp(data, term)

        return (
            <>
                <AppInfo employees={employees} increased={increased}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter/>
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