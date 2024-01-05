import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { ContainerLayout } from './styles';

export function Default() {
    return (
        <ContainerLayout>
            <Header />
            <Outlet />
        </ContainerLayout>
    )
}