import React from "react"
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/novo" activeClassName="active">
            Novo
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
