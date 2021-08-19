import './index.css'

const Index = (props) => {
  return (
          <input className={props.classname} type={props.type} placeholder={props.placeholder} onChange = {props.changeHandler} min={props.min} max={props.max} />
  )
}

export default Index;