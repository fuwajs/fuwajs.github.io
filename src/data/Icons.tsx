/**
 *
 * ! DISCLAIMER !
 * Almost all teh svg's here were sourced from Feather Icons
 * You can check them out at https://feathericons.com/
 */

import React from 'react';

export type SVGProps = React.SVGProps<SVGSVGElement>;

export const Sun = (props?: SVGProps) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        {...props}
        className={props.className || '' + ' sun'}
    >
        <circle className='tone1' cx='12' cy='12' r='5'></circle>
        <g className='rays tone2'>
            <line x1='12' y1='1' x2='12' y2='3'></line>
            <line x1='12' y1='21' x2='12' y2='23'></line>
            <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
            <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
            <line x1='1' y1='12' x2='3' y2='12'></line>
            <line x1='21' y1='12' x2='23' y2='12'></line>
            <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
            <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
        </g>
    </svg>
);

export const Moon = (props?: SVGProps) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        {...props}
        className={props.className || '' + ' sun'}
    >
        <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
    </svg>
);

export const Search = (props?: SVGProps) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        {...props}
        className={props.className || '' + ' search'}
    >
        <circle cx='11' cy='11' r='8' />
        <line x1='21' y1='21' x2='16.65' y2='16.65' />
    </svg>
);

export const Github = (props?: SVGProps) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        {...props}
        className={props.className || '' + ' github'}
    >
        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
    </svg>
);

export const Menu = (props?: SVGProps) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        {...props}
        className={props.className || '' + ' menu'}
    >
        <line x1='3' y1='12' x2='21' y2='12' />
        <line x1='3' y1='6' x2='21' y2='6' />
        <line x1='3' y1='18' x2='21' y2='18' />
    </svg>
);
