import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { NavigationMenuLink, NavigationMenuList } from './styles';

export function MenuHeader() {
    return (
        <NavigationMenu.Root orientation='horizontal'>
            <NavigationMenuList>
                <NavigationMenu.Item>
                    <NavigationMenuLink>
                        Calculadora
                    </NavigationMenuLink>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenuLink>
                        Histórico de consulta
                    </NavigationMenuLink>
                </NavigationMenu.Item>
            </NavigationMenuList>
        </NavigationMenu.Root>
    )
}

