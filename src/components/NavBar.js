import React from 'react'
import { Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <Navbar bg="light">
            <Button variant="outline-secondary"><Link to="/">Home</Link></Button>
            <Button variant="outline-secondary"><Link to="/places">Destinations</Link></Button>
            <Button variant="outline-secondary"><Link to="/events">Things To Do</Link></Button>
        </Navbar>
    )
}
