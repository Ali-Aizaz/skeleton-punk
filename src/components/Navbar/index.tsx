import { Dispatch, SetStateAction, useCallback } from 'react'
import { ethers } from 'ethers'

declare global {
  interface Window {
    ethereum: ethers.Eip1193Provider
  }
}

const Navbar = ({
  accounts,
  setAccounts,
}: {
  accounts: any[]
  setAccounts: Dispatch<SetStateAction<never[]>>
}) => {
  const isConnected = Boolean(accounts[0])

  const connectAccount = useCallback(async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum)
      const account = await provider.send('eth_requestAccounts', [])
      setAccounts(account)
    }
  }, [])

  return (
    <nav className="h-28 justify-between flex">
      <div className="flex p-5 gap-6">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://gmail.com">Email</a>
      </div>
      <ul className="flex p-5 gap-6">
        <li>about</li>
        <li>Mint</li>
        {isConnected ? (
          <li>Connected</li>
        ) : (
          <li
            className="cursor-pointer text-amber-300 font-bold"
            onClick={connectAccount}
          >
            Connect
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
