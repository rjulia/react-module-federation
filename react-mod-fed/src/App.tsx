import React, { useEffect, useRef } from 'react'
import Counter from './Counter'
const CounterLauncher = React.lazy(() => import("ReactModuleFederationTwo/CounterLauncher"))



function App() {

  return (
    <div className="text-center min-h-screen flex items-center justify-center">
      <Counter />
      <CounterLauncher />
    </div>
  )
}

export default App


