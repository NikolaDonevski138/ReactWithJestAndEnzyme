import React from 'react'
import './styles.scss'

const Header = () => {
    return (
        <header data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <p data-test="logoIMG">Logo</p>
                </div>
            </div>
        </header>
    )
}

export default Header