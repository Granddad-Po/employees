import './employees-list-item.css'

const EmployeesListItem = (props) => {
    const {name, salary, increase, favourite, onDelete, onToggleProp} = props

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += ' increase'
    }
    if (favourite) {
        classNames += ' like'
    }

    return (
        <li className={classNames}>
            <span
                className="list-group-item-label"
                onClick={onToggleProp}
                data-prop="favourite"
            >
                {name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={onToggleProp}
                        className="btn-cookie btn-sm"
                        type="button"
                        data-prop="increase"
                >
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}
                >
                    <i className="fas fa-trash"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm">
                    <i className="fa-solid fa-star"></i>
                </button>

            </div>
        </li>
    );
}

export default EmployeesListItem;