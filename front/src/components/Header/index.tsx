import { useNavigate } from "react-router-dom";

import { ContainerHeader, ContainerMenu } from "./styles";
import LogoImg from '../../assets/logo.png';
import { MenuHeader } from "./MenuHeader";
import { Button } from "../Button";

export function Header() {
    const navigateTo = useNavigate()

    const handleGoToHome = () => {
        navigateTo('/')
    }
    return (
        <ContainerHeader>
            <img
                onClick={handleGoToHome}
                src={LogoImg}
                alt="Logotipo Clarke Energia"
            />
            <ContainerMenu>
                <MenuHeader />
            </ContainerMenu>
            <Button
                type="button"
            >
                Fale com um especialista
            </Button>
        </ContainerHeader>
    )
}