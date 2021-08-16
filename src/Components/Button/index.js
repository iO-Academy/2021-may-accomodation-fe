import './index.css'

const Button = (props) => {
    return (
        <button className={props.class} type={props.type}>{props.valueButton}</button>
    )
}

export default Button;