import React from 'react'
import { Link } from 'react-router-dom'
import WalletIcon from './icons/WalletIcon'
import ThemeSwitchIcon from './icons/ThemeSwitchIcon'
import SingOutIcon from './icons/SingOutIcon'

const Navbar = () => {
  return (
    <header className='flex justify-center pl-4 pr-4'>
        <nav className='w-full max-w-screen-xl flex justify-between items-center pt-4 pb-4'>
          <div className='cursor-default'>
            <h3><span className='text-accent'>i</span>Wallet</h3>
          </div>

          <ul className='flex gap-16'>
            <li><Link to={'/stocks'}>Stocks</Link></li>
            <li><Link to={'/currencies'}>Currencies</Link></li>
          </ul>

          <div>
            <Link to={'/wallet'}>My wallet</Link>
          </div>

          <div className='flex gap-2 text-accent cursor-default'>
            <WalletIcon className="w-6 h-6" />$21,130.50
          </div>

          <div className='flex gap-6'>
            <a href="#">
              <ThemeSwitchIcon className="w-6 h-6" />
            </a>
            <a href="#">
              <SingOutIcon className="w-6 h-6 text-secondary hover:text-secondary-darker" />
            </a>
          </div>
        </nav>
    </header>
  )
}

export default Navbar