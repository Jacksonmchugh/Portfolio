import React from "react"
import   { Link }  from 'react-router-dom'
 const Landing = () => {
    return (
        <section className="page home">
        <h1>Welcome to</h1>
        <h1 id="home-logo">Jackson's Portfolio</h1>
        <h1>Thank you for coming by! Take a look around and feel free to reach out to me!</h1>
        <Link to='/home'>Enter here!</Link>
      </section>
    )
 }
 export default Landing