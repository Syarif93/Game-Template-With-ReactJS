import React from 'react'
import style from './Header.module.scss'
import logo from '../../img/logo.webp'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import Currency from './header/Currency'
import Cart from './header/Cart'

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerWraper}>
                <SectionTop />
            </div>
        </header>
    )
}

const SectionTop = () => {
    return (
        <section className={style.sectionTop}>
            <div className={style.logo}>
                <a href="//">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <div className={style.rightSideWrapper}>
                <div className={style.searchInput}>
                    <input type="text" placeholder="Search" />
                    <IconContext.Provider value={{color: "#00dee1", className: style.searchIcon, size: "20px"}}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                </div>
                <Currency />
                <div className={style.userAccount}>
                    <a href="//">
                        <IconContext.Provider value={{size: "20px", className: style.userIcon}}>
                            <FaRegUser />
                        </IconContext.Provider>
                    </a>
                </div>
                <Cart />
            </div>
        </section>
    )
}

export default Header
