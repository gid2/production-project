import { FC } from 'react'
import './styles/index.scss'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import {useTheme} from "App/providers/ThemeProvider";
import {AppRouter} from "App/providers/router";
import {Navbar} from "widgets/Navbar";


const  App: FC = () =>  { 

const {theme,toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter></AppRouter>
            <button onClick={toggleTheme}>Toogle</button>
        </div>
    )
}

export default App;