import React, { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import style from '../index.module.scss'
import './Currency.scss'
import { IconContext } from 'react-icons/lib'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { DropDownMenu, DropDownItem } from '../../../helpers/DropDownMenu'

const Currency = () => {
    const [toggleCurrency, setToggleCurrency] = useState(false)
    const [currency, setCurrency] = useState({
        usd: true,
        eur: false,
        gbp: false
    })
    const dropDownRef = useRef(null)

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

    // Handle Currency Component
    const handleClick = e => {
        if (dropDownRef.current && dropDownRef.current.contains(e.target)) {
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
        <div className={style.currency}>
            <a href="//" onClick={() => setToggleCurrency(!toggleCurrency)}>
                {currency.usd ? "USD" : currency.eur ? "EUR" : currency.gbp ? "GBP" : null}
                <IconContext.Provider value={{size: "20px", className: style.currencyIcon}}>
                    <MdKeyboardArrowDown />
                </IconContext.Provider>
            </a>
            <CSSTransition in={toggleCurrency} timeout={300} classNames="currency" unmountOnExit nodeRef={dropDownRef}>
                <DropDownMenu toogleCurrency={dropDownRef}>
                    <DropDownItem children="USD" handleClick={handleUSD} />
                    <DropDownItem children="UER" handleClick={handleEUR} />
                    <DropDownItem children="GBP" handleClick={handleGBP} />
                </DropDownMenu>
            </CSSTransition>
        </div>
    )
}

export default Currency
