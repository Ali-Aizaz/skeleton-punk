/* eslint-disable @typescript-eslint/naming-convention */
import hre from 'hardhat'

async function main() {
  const SkeletonPunk = await hre.ethers.getContractFactory('SkeletonPunk')
  const skeletonPunk = await SkeletonPunk.deploy()

  await skeletonPunk.deployed()

  console.log('SkeletonPunk deployed to:', skeletonPunk.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
