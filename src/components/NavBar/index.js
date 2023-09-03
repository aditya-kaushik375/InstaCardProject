import {useState} from 'react'

import {FaBars, FaTimes, FaHome, FaInfoCircle} from 'react-icons/fa'
import {
  MdHomeRepairService,
  MdContactPage,
  MdOutlineTravelExplore,
} from 'react-icons/md'

import './index.css'

const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <div className="header">
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-links">
          <FaHome size={20} style={{marginRight: '7px'}} />
          Home
        </li>
        <li className="nav-links">
          <FaInfoCircle size={20} style={{marginRight: '7px'}} />
          About
        </li>
        <li className="nav-links">
          <MdHomeRepairService size={22} style={{marginRight: '7px'}} />
          Schedules
        </li>
        <li className="nav-links">
          <MdOutlineTravelExplore size={22} style={{marginRight: '7px'}} />
          Membership
        </li>
        <li className="nav-links">
          <MdContactPage size={23} style={{marginRight: '7px'}} />
          Pricing
        </li>
        <li className="nav-links" style={{marginLeft: '6rem'}}>
          Offers
        </li>
        <li>
          <button className="sign-btn" type="button">
            Courses
          </button>
        </li>
      </ul>

      <button type="button" className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes
            size={20}
            style={({color: '#fff'}, {backgroundColor: 'transparent'})}
          />
        ) : (
          <FaBars
            size={20}
            style={({color: '#fff'}, {backgroundColor: 'transparent'})}
          />
        )}
      </button>
    </div>
  )
}

export default Header
