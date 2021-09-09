import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import themes from './data/themes.json';
import { GradiantButton } from './components/Button';
import { NavItem } from './dom/Navbar';
import { Sunrise } from './data/Icons';
import ThemeContainer from './components/Globals';

function Index() {
    const [theme, setTheme] = useState(
        (localStorage.getItem('theme') || 'dark') as 'dark' | 'light',
    );

    return (
        <>
            <ThemeContainer theme={themes[theme]} />
            <NavItem
                Icon={Sunrise as any}
                name='Theme'
                onClick={() => {
                    const newTheme = theme === 'dark' ? 'light' : 'dark';
                    setTheme(newTheme);
                    localStorage.setItem('theme', newTheme);
                }}
            />
        </>
    );
}
ReactDOM.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>,
    document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
    console.log('hot');
    import.meta.hot.accept();
}
