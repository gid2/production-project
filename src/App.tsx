import React, { FC, Suspense, useContext, useState } from 'react'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AboutPageAsync } from './component/AboutPage/AboutPage.async'
import { MainPageAsync } from './component/MainPage/MainPage.async'
import { Theme, ThemeContext } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'


const  App: FC = () =>  { 

const {theme,toggleTheme } = useTheme()
const bool = true
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme} >Toogle</button>
            <Link to={'/'} >Главная ссылка</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPageAsync/>} />
                <Route path={'/'} element= {<MainPageAsync/>}/>
                {/* <Counter/> */}
            </Routes>
            </Suspense>
        </div>
  )
}

export default App;