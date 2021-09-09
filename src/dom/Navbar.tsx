import React from 'react';
import styled from 'styled-components';

export interface NavProps {
    Icon: React.ReactSVG;
    isNav?: boolean;
    name: string;
    onClick: () => any;
    selected?: boolean;
}

export const Li = styled.li<{ selected: boolean }>`
    & svg {
        border-radius: 50%;
        transition: all 0.3ms;
        &:hover {
            ${props => (props.selected ? 'filter: brightness: 60%' : '')};
            border-radius: 25%;
        }
    }
    span {
        display: none;
    }
`;

export function NavItem({
    Icon,
    name,
    selected = false,
    isNav = false,
    onClick,
}: NavProps) {
    return (
        <>
            <Li selected={selected} onClick={onClick}>
                <Icon width='200' height='200' styles={{}} />
                <span style></span>
            </Li>
        </>
    );
}
