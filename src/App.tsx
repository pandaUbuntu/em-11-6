import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Item from './components/item'
import { itemData } from './fixture/data'
import Wrapper from './components/wrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Wrapper title="Example list">
        <ul>
          <li>Position 1</li>
          <li>Position 2</li>
          <li>Position 3</li>
          <li>Position 4</li>
          <li>Position 5</li>
        </ul>
      </Wrapper>
      <Wrapper title='Example text'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptates, ipsam nisi facere illo repellat similique fuga rerum unde voluptatem quidem sapiente delectus, pariatur assumenda explicabo? Perferendis architecto distinctio vero provident tenetur numquam, deleniti iusto amet veritatis laudantium nisi modi, quae qui! Cumque quis, obcaecati quidem amet optio rem, in illum veritatis ut facilis ad?
        </p>
      </Wrapper>
      <Wrapper title='Example image'>
        <img src='https://via.placeholder.com/400' alt='Placeholder image'/>
      </Wrapper>

      <Wrapper title='Example item'>
        <Item title='First item' description='First Desc' image='https://placehold.co/400'/>

        {itemData.map((item, index) => (
          <Item key={index} {...item}/>
        ))}
      </Wrapper>

      
    </>
  )
}

export default App
