import { useCallback, useState } from 'react'
import { ethers } from 'ethers'
import contractABI from '../../constants/contractABI.json'

declare global {
  interface Window {
    ethereum: ethers.Eip1193Provider
  }
}

const CONTRACT_ADDRESS = '0x76c90B3594C5149Ab18c0039411Fc4593b7Eb213'

const Mint = ({ accounts }: { accounts: any[] }) => {
  const [count, setCount] = useState<number>(0)
  const isConnected = Boolean(accounts[0])

  const [isLoading, setIsLoading] = useState(false)
  const [isMinted, setIsMinted] = useState(false)

  const handleCount = (num: boolean) => {
    if (num && count < 2) setCount(count + 1)
    else if (!num && count > 0) setCount(count - 1)
  }

  const handleMint = useCallback(async () => {
    if (window.ethereum) {
      setIsLoading(true)
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        contractABI.abi,
        signer
      )

      try {
        const response = await contract.mint(BigInt(count), {
          value: ethers.parseEther((0.02 * count).toString()),
        })

        console.log('response: ', response)
        setIsMinted(true)
      } catch (e: any) {
        console.log('error: ', e)
      }
      setIsLoading(false)
    }
  }, [])

  return (
    <div className="flex flex-col items-center gap-y-10 w-full justify-center absolute top-1/3">
      <h1 className="text-5xl font-bold">SkeletonPunk</h1>
      <p className="text-center text-xl font-semibold">
        It's 1520. Can the SkeletonPunk NFT save <br />
        humans from destructive rampant NFT <br />
        Speculation ? Mint SkeletonPunk to find out.
      </p>
      {isConnected ? (
        <>
          <div className="flex text-xl items-center">
            <button
              type="button"
              onClick={() => handleCount(false)}
              className="bg-orange-800/50 border border-white/20 rounded-sm w-10 h-10"
            >
              -
            </button>
            <input
              placeholder="0"
              type="number"
              readOnly
              value={count}
              className="text-center text-black w-28 h-9"
            />
            <button
              type="button"
              onClick={() => handleCount(true)}
              className="bg-orange-800/50 border border-white/20 rounded-sm w-10 h-10"
            >
              +
            </button>
          </div>
          <button
            onClick={handleMint}
            className="bg-orange-800/50 border -translate-y-8 border-white/20 rounded-sm px-7 h-10"
          >
            Mint Now
          </button>
          {isLoading && <h2 className="text-2xl font-medium">Loading...</h2>}
          {isMinted && <h2 className="text-2xl font-medium">NFT Minted</h2>}
        </>
      ) : (
        <div className="text-xl items-center text-amber-500">
          You'll Need to connect your Metamask wallet first
        </div>
      )}
    </div>
  )
}

export default Mint
