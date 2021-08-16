import './App.css'
import MainPage from "./Components/MainPage";
import DisplayAvailableHotels from "./Components/DisplayAvailableHotels";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <Link to="/hotels">hotels</Link>
            </div>
            <div>
                <Switch>
                    <Route exact path="/">
                        <AppMainPage/>
                    </Route>
                    <Route path="/hotels">
                        <DisplayHotels/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function AppMainPage() {
    return (
        <div className="App">
            <MainPage/>
        </div>
    );
}

function DisplayHotels() {
    return (
        <div>
            <DisplayAvailableHotels/>
        </div>
    );
}

