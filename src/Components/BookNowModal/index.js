import './index.css';
import Button from "../Button";
import Label from "../Label";
import Input from "../Input";
import {Link} from "react-router-dom";
import {useState} from "react";
import validator from 'validator'

const BookNowModal = (props) => {


    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessageEmail, setErrorMessageEmail] = useState('');
    const [inputName, setinputName] = useState('')
    const [inputEmail, setinputEmail] = useState('')
    const [inputAdult, setinputinputAdult] = useState('')
    const [inputChildren, setinputChildren] = useState('')

    const handleName = (e) => {
        setinputName(e.target.value)
    }

    const handleEmail = (e) => {
        setinputEmail(e.target.value)
    }

    const handleAdult = (e) => {
        setinputinputAdult(e.target.value)
    }
    const handleChildren = (e) => {
        setinputChildren(e.target.value)
    }

    const handleSuccess = (e) => {
        // if (inputName.length === 0 || inputEmail.length === 0 || inputAdult.length === 0 || inputChildren === 0) {
        //     e.preventDefault()
        //     setErrorMessage("These fields are required!")
        //
        // }  else if (inputName.length === 0) {
        //     e.preventDefault()
        //     setErrorMessage("A name must be added!")
        // }
        //
        // else {
        //
        //     //we do fetch request, put data into object and send it to the db
        //
        //     // return props.handleName({
        //     //     name: inputName,
        //     //     email: inputEmail,
        //     //     adults: inputAdult,
        //     //     children: inputChildren
        //     // })
        // }

        if (!validator.isEmail(inputEmail)) {
            e.preventDefault()
            setErrorMessageEmail("It should be a valid email!")
        }
    }

    return (
        <div>
            <div className={props.displayModal + " modal-container"}>
                <div className="modal-content">
                    <Button class="closeBotton" valueButton='x' click={() => {
                        props.setModalDisplay('hidden')
                    }}/>
                    <div>
                        <h1 className='heading'>Hotel's details</h1>
                        <p className='checkin-and-checkout-title'>Check in and Check out dates</p>
                        <p>20 AUG - 21 Aug</p>
                    </div>
                    <div>
                        <h2 className='heading'>Confirm booking</h2>
                        <div className='search-input'>
                            <Label class='inputTitle inputBookingTitle' labelValue='Name'/>
                            <Input classname='booking-input' type='text' changeHandler={handleName}/>
                        </div>
                        <div className='search-input'>
                            <Label class='inputTitle inputBookingTitle' labelValue='Email'/>
                            <Input classname='booking-input' type='text' changeHandler={handleEmail}/>
                            <div className='error'>
                                {errorMessageEmail && <div className="modal-errors"> {errorMessageEmail} </div>}
                            </div>
                        </div>
                        <div>
                            <h2 className='heading'>Number of guests</h2>
                        </div>
                        <div className='search-input'>
                            <Label class='inputTitle inputBookingTitle' labelValue='Adults'/>
                            <Input classname='booking-input' type='number' changeHandler={handleAdult}/>
                        </div>
                        <div className='search-input'>
                            <Label class='inputTitle inputBookingTitle' labelValue='Children'/>
                            <Input classname='booking-input' type='number' changeHandler={handleChildren}/>
                        </div>
                        <div className='error'>
                            {errorMessage && <div className="error"> {errorMessage} </div>}
                        </div>
                        <div>
                            <Link to={{
                                pathname: "/success"
                            }}>
                                <Button class='homeButton booking tripBtn' valueButton='Book your trip'
                                        click={handleSuccess}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookNowModal;