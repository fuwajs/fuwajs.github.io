import React, { useEffect, useState } from 'react';
import themes from '../data/themes.json';
import '../styles/index.scss';
import '../styles/src/icons.scss';
import { Sun, Moon, Github, Logo } from '../data/Icons';
import { Navbar, NavItem } from '../components/Navbar';
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
    const ThemeIcon = theme === 'dark' ? Sun : Moon;
    return (
        <>
            <header>
                <Navbar
                    type='dynamic'
                    Logo={Logo}
                    searchBar={{
                        onSubmit: e => {
                            e.preventDefault();
                            console.log('Hi');
                        },
                    }}
                >
                    <>
                        <NavItem
                            Icon={ThemeIcon}
                            name='Change theme'
                            isNav={false}
                            onClick={() =>
                                setTheme(theme === 'dark' ? 'light' : 'dark')
                            }
                        />
                        <NavItem
                            Icon={Github}
                            name='Github'
                            link='https://github.com/fuwajs/fuwa.js'
                            isNav={false}
                        />
                    </>
                </Navbar>
            </header>
            <main>
                <Logo
                    width='100'
                    height='100'
                    style={{ alignSelf: 'center' }}
                />
            </main>
        </>
    );
}
export default Index;
