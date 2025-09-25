import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">algolia</div>
      <ul className="navbar-links">
        <li className="active">Home</li>
        <li>Restaurants</li>
        <li>Orders</li>
        <li>Favorites</li>
      </ul>
      <div className="navbar-actions">
        <button className="btn login">Login</button>
        <button className="btn signup">Sign up</button>
      </div>
    </nav>
  )
}
