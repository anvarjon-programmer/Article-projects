
import { useSelector } from 'react-redux'
import './App.css'
import Counter from './components/Counter'


function App() {
     const state = useSelector(state => state.count)
  return (
    <div className="container">
      <h1>Counter:{state}</h1>
      <Counter/>
    </div>
  )
}

export default App
