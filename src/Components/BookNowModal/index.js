import './index.css';
import Button from "../Button";
import Label from "../Label";
import Input from "../Input";

const BookNowModal = (props) => {
    return (
        <div>
            <div className={props.displayModal + " modal-container"}>
                <div className="modal-content">
                    <Button class="closeBotton" valueButton='x' />
                    <div>
                        <h1 className='heading'>Hotel's details</h1>
                        <p className='checkin-and-checkout-title'>Check in and Check out dates</p>
                        <p>20 AUG - 21 Aug</p>
                    </div>
                    <div>
                        <h2 className='heading'>Confirm booking</h2>
                        <div className='search-input'>
                            <Label class='inputTitle inputBookingTitle' labelValue='Name'/>
                            <Input classname='booking-input' type='text'/>
                        </div>
                        <div className='search-input'>
                            <Label class='inputTitle inputBookingTitle' labelValue='Email'/>
                            <Input classname='booking-input' type='text'/>
                        </div>
                        <div>
                            <h2 className='heading'>Number of guests</h2>
                        </div>
                        <div className='search-input'>
                            <Label class='inputTitle inputBookingTitle' labelValue='Adults'/>
                            <Input classname='booking-input' type='number'/>
                        </div>
                        <div className='search-input'>
                            <Label class='inputTitle inputBookingTitle' labelValue='Children'/>
                            <Input classname='booking-input' type='number'/>
                        </div>
                        <div>
                            <Button class='homeButton booking tripBtn' valueButton='Book your trip'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookNowModal;