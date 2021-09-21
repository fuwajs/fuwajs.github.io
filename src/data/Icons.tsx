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
        className={(props.className || '') + ' sun'}
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
        className={(props.className || '') + ' sun'}
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
        className={(props.className || '') + ' search'}
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
        className={(props.className || '') + ' github'}
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
        className={(props.className || '') + ' menu'}
    >
        <line x1='3' y1='12' x2='21' y2='12' />
        <line x1='3' y1='6' x2='21' y2='6' />
        <line x1='3' y1='18' x2='21' y2='18' />
    </svg>
);

export const Logo = (props?: SVGProps) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 1512 1512'
        fill='none'
        // stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        {...props}
        className={(props.className || '') + ' logo'}
    >
        <defs>
            <linearGradient
                id='gradiant'
                gradientUnits='userSpaceOnUse'
                x1='79.859'
                y1='-33.316'
                x2='1432.156'
                y2='-33.316'
            >
                <stop offset='0' stop-color='#3859af' />
                <stop offset='1' stop-color='#5f7dc1' />
            </linearGradient>
        </defs>
        {/* <style>
		.shp1 { fill: #242428 } 
		.shp2 { fill: #393e5b } 
		.shp3 { fill: #242428;stroke: #242428;stroke-width: 50 } 
	</style> */}
        <g id='Group'>
            <path
                id='Path'
                fill='url(#gradiant)'
                d='M469.37 1454.68C433.12 1454.68 399.84 1433.75 382.46 1400.06L87.97 828.49C71.78 797.08 71.78 759.56 87.97 728.09L382.46 156.58C399.81 122.89 433.12 101.96 469.37 101.96L1042.63 101.96C1078.88 101.96 1112.2 122.86 1129.54 156.55L1424.03 728.12C1440.25 759.56 1440.25 797.08 1424.03 828.49L1129.54 1400.06C1112.2 1433.75 1078.88 1454.68 1042.63 1454.68L469.37 1454.68Z'
            />
            <path
                id='Compound Path'
                fill-rule='evenodd'
                className='shp1'
                d='M1185.64 101.88L1480.12 673.42C1506.64 724.89 1506.64 787.11 1480.12 838.58L1185.64 1410.12C1157.1 1465.53 1102.24 1500 1042.63 1500L469.37 1500C409.76 1500 354.9 1465.53 326.36 1410.12L31.88 838.58C5.36 787.11 5.36 724.89 31.88 673.42L326.36 101.88C354.9 46.47 409.76 12 469.37 12L1042.63 12C1102.24 12 1157.1 46.47 1185.64 101.88ZM469.37 147.27C456.51 147.27 444.69 154.7 438.53 166.65L144.05 738.19C138.31 749.34 138.31 762.66 144.05 773.81L438.53 1345.35C444.69 1357.3 456.51 1364.73 469.37 1364.73L1042.63 1364.73C1055.49 1364.73 1067.31 1357.3 1073.47 1345.35L1367.95 773.81C1373.69 762.66 1373.69 749.34 1367.95 738.2L1073.47 166.65C1067.31 154.7 1055.49 147.27 1042.63 147.27L469.37 147.27Z'
            />
        </g>
        <g id='Bird'>
            <g id='Group'>
                <path
                    id='Path'
                    className='shp1'
                    d='M300.88 644.27L585.14 587.67L522.44 841.27L521.31 842.13C521.23 842.13 447.75 776.18 300.88 644.27Z'
                />
                <g id='Group'>
                    <path
                        id='Compound Path'
                        fill-rule='evenodd'
                        className='shp1'
                        d='M617.16 597.76L553.29 850.09C549.18 866.34 535.48 875.98 521.34 875.98C513.96 875.98 506.45 873.35 500.12 867.66L280.2 670.06C258.99 651 268.25 614.4 295.63 609.12L579.41 554.4C581.46 554 583.48 553.81 585.46 553.81C606.49 553.81 622.88 575.15 617.16 597.76ZM371.37 663.26L504.22 782.63L542.8 630.21L371.37 663.26Z'
                    />
                </g>
            </g>
            <g id='Group'>
                <path
                    id='Path'
                    className='shp2'
                    d='M805.73 1094.18C629.59 1094.18 486.28 942.46 486.28 756C486.28 569.54 629.59 417.82 805.73 417.82C981.86 417.82 1125.17 569.54 1125.17 756C1125.17 942.46 981.86 1094.18 805.73 1094.18Z'
                />
                <path
                    id='Compound Path'
                    fill-rule='evenodd'
                    className='shp1'
                    d='M1157.13 756C1157.13 961.45 999.81 1128 805.74 1128C611.67 1128 454.35 961.45 454.35 756C454.35 550.55 611.67 384 805.74 384C999.81 384 1157.13 550.55 1157.13 756ZM518.24 756C518.24 923.83 647.21 1060.36 805.74 1060.36C964.27 1060.36 1093.24 923.83 1093.24 756C1093.24 588.17 964.27 451.64 805.74 451.64C647.21 451.64 518.24 588.17 518.24 756Z'
                />
            </g>
            <path
                id='Path'
                className='shp3'
                d='M724.06 620.73C724.06 639.4 709.75 654.55 692.11 654.55C674.47 654.55 660.17 639.4 660.17 620.73C660.17 602.05 674.47 586.91 692.11 586.91C709.75 586.91 724.06 602.05 724.06 620.73Z'
            />
        </g>
    </svg>
);
