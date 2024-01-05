import { ContainerHeader, ContainerMenu } from "./styles";
import LogoImg from '../../assets/logo.png';
import { MenuHeader } from "./MenuHeader";
import { Button } from "../Button";

export function Header() {
    return (
        <ContainerHeader>
            <img src={LogoImg} alt="Logotipo Clarke Energia" />
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