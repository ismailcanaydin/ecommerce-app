import styles from "./styles.module.css"
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'

function Navbar() {
    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <Link to="/">eCommerce</Link>
                    </div>
                    <ul className={styles.menu}>
                        <li>
                            <Link to="/">Products</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.right}>
                    <Link to="/singin">
                        <Button colorScheme='purple'>Login</Button>
                    </Link>
                    <Link to="/singup">
                        <Button colorScheme='purple'>Register</Button>
                    </Link>
                </div>
                {/* <Link to="/">Site Name</Link>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul> */}
            </nav>
        </div>
    )
}

export default Navbar