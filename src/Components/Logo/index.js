import './index.css'

const Logo = (props) => {

    return (
        <div className='logo'>
            <img src={props.logoSrc} alt='logo'/>
        </div>
    )
}

export default Logo;