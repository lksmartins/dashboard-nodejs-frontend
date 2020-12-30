import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return(
        <header id="main-header">
            <div className="header-content">
                <Link to="/">
                  home
                </Link>
                <Link to="/orders">
                  Orders
                </Link>
            </div>
        </header>
  )
}