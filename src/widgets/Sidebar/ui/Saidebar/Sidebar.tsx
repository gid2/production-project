import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import React, {FC, ReactNode, useState} from "react";
import {ThemeSwither} from "shared/ui/ThemeSwither";
import {LangSwitcher} from "shared/ui/LangSwitcher/ui/LangSwitcher";


interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}:SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className, ])} >
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwither />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};
