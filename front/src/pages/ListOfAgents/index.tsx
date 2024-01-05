
import { TableListAgents } from "./components/TableListAgents";
import { ContainerListOfAgents } from "./styles";

export function ListOfAgents() {
    return (
        <ContainerListOfAgents>
            <h1>Lista de empresas</h1>
            <TableListAgents />
        </ContainerListOfAgents>
    )
}