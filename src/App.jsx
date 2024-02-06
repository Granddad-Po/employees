import './App.css'
import AppInfo from "./components/app-info/app-info.jsx";
import SearchPanel from "./components/search-panel/search-panel.jsx";
import AppFilter from "./components/app-filter/app-filter.jsx";
import EmployeesList from "./components/employees-list/employees-list.jsx";
import EmployeesAddForm from "./components/employees-add-form/employees-add-form.jsx";

function App() {

    return (
        <>
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList/>

            <EmployeesAddForm/>
        </>
    )
}

export default App
