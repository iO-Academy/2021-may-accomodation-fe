import './index.css';

const Image = (props) => {
    return (
        <div className={props.class}>
            <img className='image' src={props.imageSrc} />
        </div>
    )
}

export default Image;