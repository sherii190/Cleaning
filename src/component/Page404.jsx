import React from 'react'
import { NavLink } from "react-router-dom"
function Page404() {
  return (
    <div>
    <div style={{ backgroundColor: "#06278a", height: 110 }} />
    <NavLink to="/">
      <img src="assets/img/banner/404.jpg" />
      </NavLink>
    </div>
  )
}

export default Page404
