import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CakeView } from './app/features/cake/cakeView'
import { IceCreamView } from './app/features/icecream/IceCreamView'
import { UserView } from './app/features/user/UserView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CakeView />
        <IceCreamView />
      </div>
      <div>
        <UserView />
      </div>
    </div>
  )
}

export default App
