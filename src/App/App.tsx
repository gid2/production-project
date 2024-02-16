import {FC, Suspense} from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import {useTheme} from "App/providers/ThemeProvider";
import {AppRouter} from "App/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const  App: FC = () =>  {

const {theme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <Navbar />
                <div className={'content-page'}>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App;