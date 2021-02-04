import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/events">Things To Do</Link>
        </div>
    )
}
