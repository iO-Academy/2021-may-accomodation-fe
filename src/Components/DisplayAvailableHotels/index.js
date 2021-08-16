import './index.css'
import Logo from "../Logo";
import Button from "../Button";
import {
    Link
} from "react-router-dom";

const DisplayAvailableHotels = () => {
    return (
        <div>
            <div className='hotelsHeader'>
                <Logo logoSrc='../img/logoBlack.png'/>
                <Link to="/"><Button class='homeButton' valueButton='Home'/></Link>
            </div>
            <div>
                <div>
                    <img/>
                </div>
                <div>
                    <p>Location</p>
                    <p>Capacity</p>
                    <p>Cost/night</p>
                </div>
                <Button class='homeButton booking' valueButton='Book now'/>
            </div>

        </div>
    )
}

export default DisplayAvailableHotels;