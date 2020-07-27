import React from 'react'
import style from './DropDownMenu.module.scss'

export const DropDownMenu = (items) => {
    return (
        <div className={style.dropDownMenu} ref={items.toogleCurrency}>
            <ul className={style.dropDownItems}>
                {items.children}
            </ul>
        </div>
    )
}

export const DropDownItem = (items) => {
    return (
        <li className={style.dropDownItem}><a href="//" onClick={items.handleClick}>{items.children}</a></li>
    )
}
