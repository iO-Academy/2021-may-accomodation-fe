import './index.css';
import Button from "../Button";
import Label from "../Label";
import Input from "../Input";
import {useHistory} from "react-router-dom";
import {useState} from "react";
import validator from 'validator'
import moment from 'moment'

const BookNowModal = (props) => {

    const history = useHistory()

    const [errorMessageResponse, setErrorMessageResponse] = useState('');
    const [errorMessageName, setErrorMessageName] = useState('');
    const [errorMessageEmail, setErrorMessageEmail] = useState('');
    const [errorMessageAdult, setErrorMessageAdult] = useState('');
    const [errorMessageChildren, setErrorMessageChildren] = useState('');
    const [inputName, setinputName] = useState('')
    const [inputEmail, setinputEmail] = useState('')
    const [inputAdult, setinputAdult] = useState('')
    const [inputChildren, setinputChildren] = useState('')

    const handleName = (e) => {
        setinputName(e.target.value)
    }

    const handleEmail = (e) => {
        setinputEmail(e.target.value)
    }

    const handleAdult = (e) => {
        setinputAdult(e.target.value)
    }
    const handleChildren = (e) => {
        setinputChildren(e.target.value)
    }

    const handleSuccess = async (e) => {
        let isValid = true;

        if (inputName.length === 0) {
            isValid = false;
            setErrorMessageName("This field is required!")
        } else if (!validator.isAlpha(inputName)) {
            isValid = false;
            setErrorMessageName("It must be a valid name!")
        } else {
            setErrorMessageName(" ")
        }

        if (inputEmail.length === 0) {
            e.preventDefault()
            isValid = false;
            setErrorMessageEmail("This field is required!")
        } else if (!validator.isEmail(inputEmail)) {
            e.preventDefault()
            isValid = false;
            setErrorMessageEmail("It should be a valid email!")
        } else {
            setErrorMessageEmail(" ")
        }

        if (inputAdult.length === 0) {
            e.preventDefault()
            isValid = false;
            setErrorMessageAdult("This field is required!")
        } else {
            setErrorMessageAdult(" ")
        }

        if (inputChildren.length === 0) {
            e.preventDefault()
            isValid = false;
            setErrorMessageChildren("This field is required!")
        } else {
            setErrorMessageChildren(" ")
        }

        if (isValid) {
            const rawResponse = await fetch('http://127.0.0.1:3000/hotels/' + props.hotelId, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: inputName,
                    email: inputEmail,
                    checkin: props.checkin,
                    checkout: props.checkout,
                    adult_guests: inputAdult,
                    child_guests: inputChildren
                })
            });
            const response = await rawResponse.json()
            if (response.success) {
                history.push('/success')
            } else {
                setErrorMessageResponse('Something went wrong, please try again!')
            }
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
                        <p> {moment(new Date(props.checkin)).format("DD/MM/YYYY")} - {moment(new Date(props.checkout)).format("DD/MM/YYYY")}</p>
                    </div>
                    <div>
                        <h2 className='heading'>Confirm booking</h2>
                        <div className='search-input'>
                            <Label class='inputTitle inputBookingTitle' labelValue='Name'/>
                            <Input classname='booking-input' type='text' changeHandler={handleName}/>
                            <div className='error'>
                                {errorMessageName && <div className="modal-errors"> {errorMessageName} </div>}
                            </div>
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
                            <Input classname='booking-input' type='number' changeHandler={handleAdult}
                                   placeholder={errorMessageAdult} min="0" max="100"/>
                        </div>
                        <div className='search-input'>
                            <Label class='inputTitle inputBookingTitle' labelValue='Children'/>
                            <Input classname='booking-input' type='number' changeHandler={handleChildren}
                                   placeholder={errorMessageChildren} min="0" max="100"/>
                        </div>
                        <div>
                            <Button class='homeButton booking tripBtn' valueButton='Book your trip'
                                    click={handleSuccess}/>
                            <div className='error'>
                                {errorMessageResponse && <div className="modal-errors"> {errorMessageResponse} </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookNowModal;