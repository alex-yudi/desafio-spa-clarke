import { useNavigate } from 'react-router-dom';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { NavigationMenuLink, NavigationMenuList } from './styles';

export function MenuHeader() {
    const navigateTo = useNavigate();
    const handleGoToHome = () => {
        navigateTo('/')
    }
    return (
        <NavigationMenu.Root orientation='horizontal'>
            <NavigationMenuList>
                <NavigationMenu.Item>
                    <NavigationMenuLink
                        onClick={handleGoToHome}
                    >
                        Calculadora
                    </NavigationMenuLink>
                </NavigationMenu.Item>
            </NavigationMenuList>
        </NavigationMenu.Root>
    )
}

