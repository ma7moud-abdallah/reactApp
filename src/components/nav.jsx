import React from 'react'

const Nav = ({totalProducts}) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Navbar {totalProducts.length}</span>
            </nav>
        </div>
    )
}

export default Nav 
