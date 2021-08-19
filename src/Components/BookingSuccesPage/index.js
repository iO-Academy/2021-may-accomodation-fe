import './index.css';

const BookingSuccesPage = (props) => {
    return (
        <div className='content-booking'>
            <h1>Booking Successful!</h1>
            <div>
                <i className="fas fa-check"></i>
            </div>
            <div className='thankyou-container'>
                <p className='thankyou-text'>Thank you! Your booking was successful. We hope you enjoy your trip !</p>
            </div>
        </div>
    )
}

export default BookingSuccesPage;