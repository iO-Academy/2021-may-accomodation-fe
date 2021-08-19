import './App.css'
import MainPage from "./Components/MainPage";
import DisplayAvailableHotels from "./Components/DisplayAvailableHotels";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {useEffect, useState} from "react";
import BookingSuccesPage from "./Components/BookingSuccesPage";

export default function App() {

 const[searchData, setSearchData] = useState({})

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact>
                        <MainPage setSearchData={setSearchData} />
                    </Route>
                    <Route path="/hotels">
                        <DisplayAvailableHotels searchData={searchData} />
                    </Route>
                    <Route path="/success">
                        <BookingSuccesPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}





