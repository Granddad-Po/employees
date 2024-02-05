import './App.css'
import AppInfo from "./components/app-info/app-info.jsx";
import SearchPanel from "./components/search-panel/search-panel.jsx";

function App() {

    return (
        <>
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
            </div>
        </>
    )
}

export default App
