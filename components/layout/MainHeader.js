import React from 'react'
import Link from 'next/link'
import * as headerStyles from '../../styles/main-header.module.css'

const MainHeader = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.logo}>
                <Link href='/'>
                    NextEvents
                </Link>
            </div>
            <nav className={headerStyles.navigation}>
                <li>
                    <Link href='/events'>
                        All Events
                    </Link>
                </li>
            </nav>
        </header>
    )
}

export default MainHeader
