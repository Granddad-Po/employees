import './search-panel.css'
import { Component } from "react";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                name="search"
                value={this.state.term}
                placeholder="Найти сотрудника"
                onChange={this.onUpdateSearch}
            />
        );
    }
}

export default SearchPanel;