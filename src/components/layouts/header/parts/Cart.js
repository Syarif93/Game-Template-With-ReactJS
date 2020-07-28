import React, { useState, useRef, useEffect } from 'react'
import style from '../index.module.scss'
import './Cart.scss'
import { IconContext } from 'react-icons/lib'
import { RiShoppingCartLine } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { CSSTransition } from 'react-transition-group'

const Cart = () => {
    // States
    const [toggleCart, setToggleCart] = useState(false)

    // CSSTransitions
    const cartRef = useRef()

    const handleClick = e => {
        if (cartRef.current && cartRef.current.contains(e.target)) {
          // inside click
          return;
        }
        // outside click
        setToggleCart(false);
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

    return (
        <div className={style.cart}>
            <a href="//" onClick={() => setToggleCart(!toggleCart)}>
                <div className={style.icon}>
                    <IconContext.Provider value={{size: "20px", className: style.cartIcon}}>
                        <RiShoppingCartLine />
                    </IconContext.Provider>
                    <span><p>1</p></span>
                </div>
                <div className={style.price}>
                    <p>$0.00</p>
                    <IconContext.Provider value={{size: "20px", className: style.priceIcon}}>
                        <MdKeyboardArrowDown />
                    </IconContext.Provider>
                </div>
            </a>
            <CSSTransition in={toggleCart} timeout={300} classNames="cart" unmountOnExit nodeRef={cartRef}>
                <div className="dropDownCart" ref={cartRef}>
                    <ul className="dropDownCartItems">
                        <li className="dropDownCartItem"><a href="//">No Product in Cart</a></li>
                        <li className="dropDownCartItem"><a href="//">No Product in Cart</a></li>
                        <li className="dropDownCartItem"><a href="//">No Product in Cart</a></li>
                        <li className="dropDownCartItem"><a href="//">No Product in Cart</a></li>
                        <li className="dropDownCartItem"><a href="//">No Product in Cart</a></li>
                        <li className="dropDownCartItem"><a href="//">No Product in Cart</a></li>
                    </ul>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Cart
