import { LineDataAgents, SelectAgent } from "./styles";

import { DataAgents } from "../../../../../@types/dataAgents";

export function LineBodyAgents({ link_logo, name, state_origin, cost_kwh, lim_min_kwh, total_customers, evaluation_customers }: DataAgents) {

    const handleSelectAgent = () => {
        alert(`Você selecionou a empresa ${name}`)
    }
    return (
        <LineDataAgents>
            <td><img src={link_logo} alt="" /></td>
            <td>{name}</td>
            <td>{state_origin}</td>
            <td>{cost_kwh}</td>
            <td>{lim_min_kwh}</td>
            <td>{total_customers}</td>
            <td>{evaluation_customers}</td>
            <td>
                <SelectAgent
                    type="button"
                    onClick={handleSelectAgent}
                >
                    Selecionar
                </SelectAgent>
            </td>
        </LineDataAgents>
    )
}