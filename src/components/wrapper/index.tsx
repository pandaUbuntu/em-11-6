import './style.css'

type WrapperType ={
    title: string,
    children: React.ReactNode,
}

function Wrapper(props:WrapperType) {


  return (
    <div className="wrapper">
        <h2>{props.title}</h2>
        {props.children}
    </div>
  )
}

export default Wrapper