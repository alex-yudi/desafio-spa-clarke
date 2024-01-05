import { ButtonHTMLAttributes } from "react";
import { Button as ButtonComponent } from "./styles";


export function Button({ children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <ButtonComponent {...rest}>
            {children}
        </ButtonComponent>
    )
}