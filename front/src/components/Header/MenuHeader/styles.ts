import styled from "styled-components";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';


export const NavigationMenuList = styled(NavigationMenu.NavigationMenuList)`
    display: flex;
    justify-content: space-between;

    min-width: 20rem;
    height: 100%;

    list-style: none;
`;

export const NavigationMenuLink = styled(NavigationMenu.Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1rem;
    font-weight: 600;

    cursor: pointer;
    transition: color 0.1s;

    &:hover {
        color: ${props => props.theme.colors.principal};
    }
    &:active {
        color: ${props => props.theme.colors.black};
    }
`;