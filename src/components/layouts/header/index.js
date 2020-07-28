import React, { useRef, useState, useEffect } from 'react'
import style from './index.module.scss'
import logo from '../../../img/logo.webp'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import Currency from './parts/Currency'
import Cart from './parts/Cart'
import MainMenu from './parts/sectionBottom/MainMenu'
import SecondMenu from './parts/sectionBottom/SecondMenu'

const Header = () => {
    const [isSticky, setSticky] = useState(false)
    const stikyRef = useRef(null)
    const handleScroll = () => {
        if(stikyRef.current) {
            setSticky(stikyRef.current.getBoundingClientRect().top <= 0);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', () => handleScroll)
        }
    }, [])

    return (
        <header className={style.header}>
            <div className={style.headerWraper}>
                <SectionTop />
                <div className={isSticky ? style.stickyWrapper + ' ' + style.stikyHeader : style.stickyWrapper} ref={stikyRef}>
                    <div className={style.stickyInner}>
                        <SectionBottom />
                    </div>
                </div>
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

const SectionBottom = () => {
    return (
        <section className={style.sectionBottom}>
            <div className={style.navMenus}>
                <MainMenu />
                <SecondMenu />
            </div>
        </section>
    )
}

export default Header
