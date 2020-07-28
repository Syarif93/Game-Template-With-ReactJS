import React from 'react'
import style from './SecondMenu.module.scss'
import { IconContext } from 'react-icons/lib'
import { MdKeyboardArrowDown } from 'react-icons/md'

const SecondMenu = () => {
    return (
        <div className={style.secondMenu}>
            <ul className={style.menuLists}>
                <li className={style.menuList}>
                    <a href="//">
                        <strong>Men</strong>
                        <IconContext.Provider value={{size: "20px", className: style.arrowDown}}>
                            <MdKeyboardArrowDown />
                        </IconContext.Provider>
                    </a>
                </li>
                <li className={style.menuList}>
                    <a href="//">
                        <strong>Women</strong>
                        <IconContext.Provider value={{size: "20px", className: style.arrowDown}}>
                            <MdKeyboardArrowDown />
                        </IconContext.Provider>
                    </a>
                </li>
                <li className={style.menuList}>
                    <a href="//">
                        <strong>Accessories</strong>
                        <IconContext.Provider value={{size: "20px", className: style.arrowDown}}>
                            <MdKeyboardArrowDown />
                        </IconContext.Provider>
                    </a>
                </li>
                <li className={style.menuList}><a href="//"><strong>Lookbook</strong></a></li>
                <li className={style.menuList}><a href="//"><strong>Wishlist</strong></a></li>
                <li className={style.menuList}><a href="//"><strong>Contact</strong></a></li>
            </ul>
            <span><a href="//"><strong>Blog</strong></a></span>
        </div>
    )
}

export default SecondMenu
