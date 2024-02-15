import { FC } from 'react'
import './styles/index.scss'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import {useTheme} from "App/providers/ThemeProvider";
import {AppRouter} from "App/providers/router";


const  App: FC = () =>  { 

const {theme,toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme} >Toogle</button>
            <Link to={'/'} >Главная ссылка</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter></AppRouter>
        </div>
  )
}

export default App;