import React, { useEffect, useState } from 'react';
import themes from '../data/themes.json';
import '../styles/index.scss';
import { Sun, Moon } from '../data/Icons';

function changeThemes(themeName: string) {
    const theme = themes[themeName];
    const setProp = (name: string, val: string) =>
        (document.rootElement || document.documentElement).style.setProperty(
            name,
            val,
        );

    Object.keys(theme).forEach(key => setProp('--' + key, theme[key]));
}

function Index() {
    const [theme, setTheme] = useState(
        (localStorage.getItem('theme') || 'dark') as 'dark' | 'light',
    );
    useEffect(() => changeThemes(theme), [theme]);
    return (
        <>
            <main>
                <button
                    onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                >
                    Theme
                </button>
            </main>
        </>
    );
}
export default Index;
