import React, { useState, useRef, useEffect } from 'react'
import style from './MainMenu.module.scss'
import './MainMenu.scss'
import { IconContext } from 'react-icons/lib'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'
import { CSSTransition } from 'react-transition-group'

const MainMenu = () => {
    const [listCategories, setListCategories] = useState(false)
    const listCategoriesRef = useRef()
    const [xConsoleList, setXConsoleList] = useState(false)
    const listXConsoleRef = useRef()
    const [psPlayingList, setPsPlayingList] = useState(false)
    const listPsPlaying = useRef()
    const [pcList, setPcList] = useState(false)
    const listPc = useRef()

    // Handle listCategories
    const handleClick = (e) => {
        if(listCategoriesRef.current && listCategoriesRef.current.contains(e.target)) {
            return
        }

        setListCategories(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

    // Handle List XConsole
    const handleClickXConsole = (e) => {
        if(listXConsoleRef.current && listXConsoleRef.current.contains(e.target)) {
            return
        }

        setXConsoleList(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickXConsole)
        return () => {
            document.removeEventListener("mousedown", handleClickXConsole)
        }
    }, [])

    // Handle listPsPlaying
    const handleClickPsPlaying = (e) => {
        if(listPsPlaying.current && listPsPlaying.current.contains(e.target)) {
            return
        }

        setPsPlayingList(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickPsPlaying)
        return () => {
            document.removeEventListener("mousedown", handleClickPsPlaying)
        }
    }, [])

    // Handle listPsPlaying
    const handleClickPc = (e) => {
        if(listPc.current && listPc.current.contains(e.target)) {
            return
        }

        setPcList(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickPc)
        return () => {
            document.removeEventListener("mousedown", handleClickPc)
        }
    }, [])

    return (
        <div className={style.mainMenu}>
            <span>
                <a href="//" onClick={() => setListCategories(true)} ref={listCategoriesRef}>
                    <strong>Categories</strong>
                    <IconContext.Provider value={{size: "20px"}}>
                        <MdKeyboardArrowDown />
                    </IconContext.Provider>
                </a>
            </span>
            <CSSTransition in={listCategories} timeout={300} classNames="listCategories" unmountOnExit nodeRef={listCategoriesRef}>
                <div className={style.mainMenuList} ref={listCategoriesRef}>
                    <ul>
                        <li className={style.xConsole}>
                            <a href="//" onClick={() => setXConsoleList(true)}>
                                <span>X-Console</span>
                                <IconContext.Provider value={{size: "20px"}}>
                                    <MdKeyboardArrowRight />
                                </IconContext.Provider>
                            </a>
                            <CSSTransition in={xConsoleList} timeout={300} classNames="listXConsole" unmountOnExit nodeRef={listXConsoleRef}>
                                <div className={style.xConsoleList} ref={listXConsoleRef}>
                                    <span className={style.title}>Components</span>
                                    <ul>
                                        <li><a href="//">Monitors</a></li>
                                        <li><a href="//">Mice and Trackballs</a></li>
                                        <li><a href="//">MP3 Players</a></li>
                                        <li><a href="//">Phones & PDAs</a></li>
                                        <li><a href="//">PC</a></li>
                                        <li><a href="//">Software</a></li>
                                    </ul>
                                </div>
                            </CSSTransition>
                        </li>
                        <li className={style.psPlaying}>
                            <a href="//" onClick={() => setPsPlayingList(true)}>
                                <span>Psplaying</span>
                                <IconContext.Provider value={{size: "20px"}}>
                                    <MdKeyboardArrowRight />
                                </IconContext.Provider>
                            </a>
                            <CSSTransition in={psPlayingList} timeout={300} classNames="listPsPlaying" unmountOnExit nodeRef={listPsPlaying}>
                                <div className={style.psPlayingList} ref={listPsPlaying}>
                                    <span className={style.title}>Components</span>
                                    <ul>
                                        <li><a href="//">Monitors</a></li>
                                        <li><a href="//">Mice and Trackballs</a></li>
                                        <li><a href="//">MP3 Players</a></li>
                                        <li><a href="//">Phones & PDAs</a></li>
                                        <li><a href="//">PC</a></li>
                                        <li><a href="//">Software</a></li>
                                    </ul>
                                </div>
                            </CSSTransition>
                        </li>
                        <li className={style.pc}>
                            <a href="//" onClick={() => setPcList(true)}>
                                <span>PC</span>
                                <IconContext.Provider value={{size: "20px"}}>
                                    <MdKeyboardArrowRight />
                                </IconContext.Provider>
                            </a>
                            <CSSTransition in={pcList} timeout={300} classNames="listPc" unmountOnExit nodeRef={listPc}>
                                <div className={style.pcList} ref={listPc}>
                                    <span className={style.title}>Components</span>
                                    <ul>
                                        <li><a href="//">Monitors</a></li>
                                        <li><a href="//">Mice and Trackballs</a></li>
                                        <li><a href="//">MP3 Players</a></li>
                                        <li><a href="//">Phones & PDAs</a></li>
                                        <li><a href="//">PC</a></li>
                                        <li><a href="//">Software</a></li>
                                    </ul>
                                </div>
                            </CSSTransition>
                        </li>
                        <li>
                            <a href="//">
                                <span>Other</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </CSSTransition>
        </div>
    )
}

export default MainMenu
