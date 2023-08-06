import { useState } from 'react'
import { Mint, Navbar } from './components'

const App = () => {
  const [accounts, setAccounts] = useState([])

  return (
    <main className="max-w-8xl mx-auto text-white relative h-screen">
      <Navbar accounts={accounts} setAccounts={setAccounts} />
      <Mint accounts={accounts} />
    </main>
  )
}

export default App
