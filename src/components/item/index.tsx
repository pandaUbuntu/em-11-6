import './style.css'
import { ItemType } from '../../fixture/data'

function Item(props:ItemType) {


  return (
    <div className='item-wrapper'>
        <img src={props.image} alt="image" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
  )
}

export default Item