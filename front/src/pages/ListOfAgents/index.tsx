import { ContainerListOfAgents, NotFoundAgent } from "./styles";

import { useContextSelector } from "use-context-selector";
import { TableListAgents } from "./components/TableListAgents";
import { AgentsContext } from "../../stores/contexts/agentsStore";

export function ListOfAgents() {
    const { listOfAgents } = useContextSelector(AgentsContext, (context) => context);

    return (
        <ContainerListOfAgents>
            {
                listOfAgents.length > 0 ?
                    <>
                        <h1>Lista de empresas</h1>
                        <TableListAgents />
                    </>
                    :
                    <NotFoundAgent>
                        Infelizmente, no momento, não há agentes que possam atender o seu consumo mensal.
                    </NotFoundAgent>
            }
        </ContainerListOfAgents>
    )
}