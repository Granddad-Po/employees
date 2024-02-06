import EmployeesListItem from "../emloyees-list-item/employees-list-item.jsx";

import './employees-list.css'

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem/>
            <EmployeesListItem/>
            <EmployeesListItem/>
        </ul>
    );
};

export default EmployeesList;