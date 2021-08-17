import './App.css'
import MainPage from "./Components/MainPage";
import DisplayAvailableHotels from "./Components/DisplayAvailableHotels";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default function App() {

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={MainPage} exact />
                    <Route path="/hotels" component={DisplayAvailableHotels} />
                </Switch>
            </div>
        </Router>
    );
}





