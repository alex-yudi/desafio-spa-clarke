import { LineDataAgents, SelectAgent } from "./styles";

import { DataAgents } from "../../../../../@types/dataAgents";

export function LineBodyAgents({ logo, name, state, costPerKwh, minKwh, totalCustomers, evaluationCustomers }: DataAgents) {

    const handleSelectAgent = () => {
        alert(`Você selecionou a empresa ${name}`)
    }
    return (
        <LineDataAgents>
            <td><img src={logo} alt="" /></td>
            <td>{name}</td>
            <td>{state}</td>
            <td>{costPerKwh}</td>
            <td>{minKwh}</td>
            <td>{totalCustomers}</td>
            <td>{evaluationCustomers}</td>
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