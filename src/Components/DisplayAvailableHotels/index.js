import './index.css'
import Logo from "../Logo";
import Button from "../Button";
import {
    Link
} from "react-router-dom";
import Image from "../Image";
import {useEffect, useState} from "react";
import BookNowModal from "../BookNowModal";

const DisplayAvailableHotels = (props) => {

    const [allHotels, setHotels] = useState([])
    const [hotelId, setHotelId] = useState('')

    const [modalDisplay, setModalDisplay] = useState('hidden');

    const hotels = async (e) => {
        const response = await fetch('http://localhost:3000/hotels?checkin='+ props.searchData.checkin + '&checkout='+ props.searchData.checkout)
        let hotelsResponse = await response.json();
        setHotels(hotelsResponse)
    }

    useEffect(() => {
        hotels()
    }, [])

    return (
        <div>
            <div className='hotelsHeader'>
                <Logo logoSrc='../img/logoBlack.png'/>
                <Link to="/"><Button class='homeButton' valueButton='Home'/></Link>
            </div>
            <div className='main-hotels-container'>

                {allHotels.map((hotel, index) => {
                    return (
                        <div className='content-hotels' key={index}>
                            <div>
                                <Image class='imageSize' imageSrc={hotel.image}/>
                            </div>
                            <div>
                                <div className='pharagraphs-top'>
                                    <p>Location: {hotel.location}</p>
                                    <p>Capacity: {hotel.capacity} room</p>
                                </div>
                                <div className='pharagraphs-bottom'>
                                    <p>Cost/night: £{hotel.cost_per_night}</p>
                                    <p>Available</p>
                                </div>
                            </div>
                            <div className='button-booking'>
                                <Button class='homeButton booking' valueButton='Book now' click={() => {
                                    setHotelId(hotel._id)
                                    setModalDisplay('show')
                                }}/>
                            </div>
                        </div>
                    )
                })}
            </div>
            <BookNowModal hotelId={hotelId} checkin={props.searchData.checkin} checkout={props.searchData.checkout}  displayModal={modalDisplay} setModalDisplay={setModalDisplay} />
        </div>
    )
}

export default DisplayAvailableHotels