import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem, } from 'reactstrap'

const Header = () => {
    return (
        <div className='container'>
            <h1> React-Hooks</h1>
            <Nav className="nav nav-tabs">
                <NavItem className="nav-item">
                    <NavLink className='nav-link' to='state'>useState</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                    <NavLink className='nav-link' to='reducer'>useReducer</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                    <NavLink className='nav-link' to="context" >useContext</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                    <NavLink className='nav-link' to="useref" >useRef</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                    <NavLink className='nav-link' to="memo"> Memo</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                    <NavLink className='nav-link' to="call-back"> callBack</NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}

export default Header