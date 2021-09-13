import React from 'react';
import Searchbar from './Searchbar';
import { Menu } from '../data/Icons';
import '../styles/src/nav.scss';

export interface NavProps {
    searchBar:
        | {
              onSubmit: React.DOMAttributes<HTMLFormElement>['onSubmit'];
          }
        | false;
    Logo?: any;
    type: 'top' | 'left' | 'right' | 'bottom' | 'dynamic' | 'nested';
    children?: JSX.Element | JSX.Element[];
}
export interface ItemProps {
    name: string;
    Icon: any;
    isNav: boolean;
    children?: JSX.Element | JSX.Element[];
    link?: string;
    onClick?: () => void;
}

export function Navbar({ searchBar = false, Logo, children, type }: NavProps) {
    return (
        <>
            <nav className={`nav nav-${type}`}>
                {Logo && (
                    <a href='/'>
                        <Logo className='nav-logo' />
                    </a>
                )}
                {searchBar && (
                    <Searchbar
                        onSubmit={searchBar.onSubmit}
                        placeholder='Search docs'
                    />
                )}
                <Menu className='menu' />
                <ul className='nav-items'>{children}</ul>
            </nav>
        </>
    );
}

export function NavItem({
    name,
    Icon,
    isNav,
    children,
    link,
    onClick,
}: ItemProps) {
    return (
        <>
            <li className='nav-item' onClick={onClick}>
                {isNav ? (
                    <>
                        <Icon />
                        <span>{name}</span>
                        <Navbar searchBar={false} type='nested'>
                            {children}
                        </Navbar>
                    </>
                ) : (
                    <>
                        <a href={link}>
                            <Icon />
                        </a>
                        <span>{name}</span>
                    </>
                )}
            </li>
        </>
    );
}
