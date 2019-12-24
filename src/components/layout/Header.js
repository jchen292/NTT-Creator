import React from 'react'
import { Link } from 'react-router-dom'


function Header(){
    return (
        <header style = {headerStyle1}>
            <h1>Your List of Tips, Notes, or TODOS</h1>
            <h3>Created by Jordan Chen</h3>
            <Link style = { linkStyle1 } to = "/">NTT Main Page</Link> | <Link style = { linkStyle1 } to= "/about">About Page</Link> | <Link style = { linkStyle1 } to= "/contact">Contact Page</Link>
        </header>
        
    )
}

const headerStyle1 = {
    color: '#61FF33',
    textAlign: 'center',
    background: '#4D5A5B'
}

const linkStyle1 = {
    color: '#61FF33'
}

export default Header;