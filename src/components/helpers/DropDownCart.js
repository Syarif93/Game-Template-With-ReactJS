import React from 'react'
import style from './DropDownCart.module.scss'

export const DropDownCart = (items) => {
    return (
        <div className={style.dropDownCart} ref={items.toogleCart}>
            <ul className={style.dropDownCartItems}>
                {items.children}
            </ul>
        </div>
    )
}

export const DropDownCartItem = (items) => {
    return (
        <li className={style.dropDownCartItem}><a href="//" onClick={items.handleClick}>{items.children}</a></li>
    )
}