import { useContextSelector } from "use-context-selector";
import { LineBodyAgents } from "./LineBodyAgents";
import { LineHeadAgents } from "./LineHeadAgents";
import { TableAgents } from "./styles";
import { AgentsContext } from "../../../../stores/contexts/agentsStore";
import { DataAgents } from "../../../../@types/dataAgents";

export function TableListAgents() {
    const { listOfAgents } = useContextSelector(AgentsContext, (context) => context);

    return (
        <TableAgents>
            <thead>
                <LineHeadAgents />
            </thead>
            <tbody>
                {listOfAgents.map((agent: DataAgents) => (
                    <LineBodyAgents
                        key={agent.id}
                        id={agent.id}
                        name={agent.name}
                        link_logo={agent.link_logo}
                        state_origin={agent.state_origin}
                        cost_kwh={agent.cost_kwh}
                        lim_min_kwh={agent.lim_min_kwh}
                        total_customers={agent.total_customers}
                        evaluation_customers={agent.evaluation_customers}
                    />
                )
                )}
            </tbody>
        </TableAgents>
    )
}