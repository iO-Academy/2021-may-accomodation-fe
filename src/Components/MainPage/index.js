import './index.css';
import Logo from "../Logo";
import Input from "../Input";
import Label from "../Label";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const MainPage = () => {

    const [inputValueLocation, setinputValueLocation] = useState('')
    const [inputValueCheckin, setinputValueCheckin] = useState('')
    const [inputValueCheckout, setinputValueCheckout] = useState('')

    const handleLocationChange = (e) => {
        setinputValueLocation(e.target.value)
    }

    const handleCheckinChange = (e) => {
        setinputValueCheckin(e.target.value)
    }

    const handleCheckout = (e) => {
        setinputValueCheckout(e.target.value)
    }

    return (
        <div className='background-image' style={{backgroundImage: "url(./img/Mountain.jpeg)"}}>
            <Logo logoSrc='../img/imageTwo.png'/>
            <div>
                <h1 className='title'>Find your perfect trip!</h1>
            </div>
            <div className='search-bar'>
                <div className='search-input'>
                    <Label class='inputTitle locationTitle' labelValue='Location'/>
                    <Input classname='borderNone' type='text' placeholder='Where are you going?' changeHandler={handleLocationChange}/>
                </div>
                <div className='search-input checkin'>
                    <Label class='inputTitle' labelValue='Check in'/>
                    <Input classname='borderNone' type='date' changeHandler={handleCheckinChange}/>
                </div>
                <div className='search-input'>
                    <Label class='inputTitle' labelValue='Check out'/>
                    <Input classname='borderNone' type='date' changeHandler={handleCheckout}/>
                </div>
                <Link
                    to={{
                        pathname: "/hotels",
                        state: {
                            inputValueLocation: inputValueLocation,
                            inputValueCheckin: inputValueCheckin,
                            inputValueCheckout: inputValueCheckout
                        }
                    }}
                >
                    <button className='search-input-button'>
                        <i className="fas fa-search"></i>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default MainPage;