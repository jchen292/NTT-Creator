import React from 'react'

function Header(){
    return (
        <header style = {headerStyle1}>
            <h1>Your List of Tips, Notes, or TODOS</h1>
            <h3>Created by Jordan Chen</h3>
        </header>
        
    )
}

const headerStyle1 = {
    color: '#61FF33',
    textAlign: 'center',
    background: '#333'
}


export default Header;