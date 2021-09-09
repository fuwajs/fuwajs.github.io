import { createGlobalStyle } from 'styled-components';
import type { ThemeType } from '../types';

const ThemeContainer = createGlobalStyle<{ theme: ThemeType['dark'] }>`


:root {
    --bg: ${props => props.theme.bg};
    --text: ${props => props.theme.text};
    --accent: ${props => props.theme.accent};
    --main: ${props => props.theme.main};
    --main2: ${props => props.theme.main2};
}

*, html, body {
    color: var(--text);
    transition: color, background-color 0.3s;
}

body {
    background-color: var(--bg);
}

ul, li { list-style: none; }

a, button *[button], *[type="button"] {
     cursor: pointer
}


`;
export default ThemeContainer;
