import './index.css'

const Index = (props) => {
  return (
          <input className={props.classname} type={props.type} placeholder={props.placeholder} onChange = {props.changeHandler} />
  )
}

export default Index;