import './app-filter.css'

const AppFilter = ({filter, onFilterSelect}) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'increase', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'},
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button
                key={name}
                type="button"
                className={`btn ${clazz}`}
                onClick={() => onFilterSelect(name)}
            >
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group d-md-block">
            {buttons}
        </div>
    );
};

export default AppFilter;