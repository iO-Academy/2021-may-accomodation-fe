import './index.css';
import Logo from "../Logo";
import Input from "../Input";
import Label from "../Label";
import Button from "../Button";

const MainPage = () => {
    return (
        <div className='background-image' style={{backgroundImage: "url(./img/Mountain.jpeg)"}}>
            <Logo logoSrc='../img/imageTwo.png'/>
            <div>
                <h1 className='title'>Find your perfect trip!</h1>
            </div>
            <div className='search-bar'>
                <div className='search-input'>
                    <Label class='inputTitle' labelValue='Location'/>
                    <Input classname='borderNone' type='text' placeholder='Where are you going?'/>
                </div>
                <div className='search-input checkin'>
                    <Label class='inputTitle' labelValue='Check in'/>
                    <Input classname='borderNone' type='date'/>
                </div>
                <div className='search-input'>
                    <Label class='inputTitle' labelValue='Check out'/>
                    <Input classname='borderNone' type='date'/>
                </div>
                <div>
                    <button className='search-input-button'>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MainPage;