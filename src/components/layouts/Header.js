import React, { useState, useRef, useEffect } from 'react'
import style from './Header.module.scss'
import logo from '../../img/logo.webp'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa'
import { RiShoppingCartLine } from 'react-icons/ri'
import { IconContext } from 'react-icons/lib'
import { DropDownItem, DropDownMenu } from '../helpers/DropDownMenu'
import { Transition } from 'react-transition-group'
import { DropDownCart, DropDownCartItem } from '../helpers/DropDownCart'

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
    // States
    const [currency, setCurrency] = useState({
        usd: true,
        eur: false,
        gbp: false
    })
    const [toggleCurrency, setToggleCurrency] = useState(false)
    const dropDownRef = useRef()
    const [toggleCart, setToggleCart] = useState(false)
    console.log(toggleCart)

    // Handle the States
    const handleUSD = () => {
        setCurrency({
            usd: true,
            eur: false,
            gbp: false
        })

        setToggleCurrency(false);
    }

    const handleEUR = () => {
        setCurrency({
            usd: false,
            eur: true,
            gbp: false
        })

        setToggleCurrency(false);
    }

    const handleGBP = () => {
        setCurrency({
            usd: false,
            eur: false,
            gbp: true
        })

        setToggleCurrency(false);
    }

    // CSSTransitions
    const duration = 300;
    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }
    const transitionStyles = {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
    }

    const cartRef = useRef()
    const cartTransitionDuration = 300
    const CartStyleDuration = {
        transition: `opacity ${cartTransitionDuration}ms ease-in-out`,
        opacity: 0,
        position: 'relative',
        top: 55,
        right: 560
    }
    const CartTransitionStyle = {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
    }

    // Handle Currency Component
    const handleClick = e => {
        if (dropDownRef.current.contains(e.target)) {
          // inside click
          return;
        }
        // outside click
        setToggleCurrency(false);
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

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
                <div className={style.currency}>
                    <a href="//" onClick={() => setToggleCurrency(!toggleCurrency)}>
                        {currency.usd ? "USD" : currency.eur ? "EUR" : currency.gbp ? "GBP" : null}
                        <IconContext.Provider value={{size: "20px", className: style.currencyIcon}}>
                            <MdKeyboardArrowDown />
                        </IconContext.Provider>
                    </a>
                    <Transition in={toggleCurrency} timeout={duration} nodeRef={dropDownRef}>
                        {state => (
                            <div style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                                }}>
                                <DropDownMenu toogleCurrency={dropDownRef}>
                                    <DropDownItem children="USD" handleClick={handleUSD} />
                                    <DropDownItem children="UER" handleClick={handleEUR} />
                                    <DropDownItem children="GBP" handleClick={handleGBP} />
                                </DropDownMenu>
                            </div>
                        )}
                    </Transition>
                </div>
                <div className={style.userAccount}>
                    <a href="//">
                        <IconContext.Provider value={{size: "20px", className: style.userIcon}}>
                            <FaRegUser />
                        </IconContext.Provider>
                    </a>
                </div>
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
                    <Transition in={toggleCart} timeout={cartTransitionDuration} nodeRef={cartRef}>
                        {state => (
                            <div style={{
                                ...CartStyleDuration,
                                ...CartTransitionStyle[state]
                            }}>
                                <DropDownCart>
                                    <DropDownCartItem children="No product in cart" />
                                </DropDownCart>
                            </div>
                        )}
                    </Transition>
                </div>
            </div>
        </section>
    )
}

export default Header
