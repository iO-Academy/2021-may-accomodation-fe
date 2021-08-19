import './index.css'

const Button = (props) => {
    return (
        <button className={props.class} type={props.type} onClick={props.click}>{props.valueButton}</button>
    )
}

export default Button;