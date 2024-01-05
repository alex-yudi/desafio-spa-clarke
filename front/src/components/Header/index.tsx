import { ContainerCallToAction, ContainerHeader, ContainerMenu } from "./styles";
import LogoImg from '../../assets/logo.png';
import { MenuHeader } from "./MenuHeader";

export function Header() {
    return (
        <ContainerHeader>
            <img src={LogoImg} alt="Logotipo Clarke Energia" />
            <ContainerMenu>
                <MenuHeader />
            </ContainerMenu>
            <ContainerCallToAction>
                Fale com um especialista
            </ContainerCallToAction>
        </ContainerHeader>
    )
}