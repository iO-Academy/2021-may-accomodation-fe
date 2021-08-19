import './index.css';
import {Link} from "react-router-dom";
import Button from "../Button";
import Logo from "../Logo";

const BookingSuccesPage = (props) => {
    return (
        <div>
            <div className='hotelsHeader'>
                <Logo logoSrc='../img/logoBlack.png'/>
                <Link to="/"><Button class='homeButton' valueButton='Home'/></Link>
            </div>
            <div className='content-booking'>
                <h1>Booking Successful!</h1>
                <div>
                    <i className="fas fa-check"></i>
                </div>
                <div className='thankyou-container'>
                    <p className='thankyou-text'>Thank you! Your booking was successful. We hope you enjoy your trip!</p>
                </div>
            </div>
        </div>
    )
}

export default BookingSuccesPage;