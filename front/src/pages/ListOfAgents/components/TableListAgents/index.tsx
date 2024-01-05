import { LineBodyAgents } from "./LineBodyAgents";
import { LineHeadAgents } from "./LineHeadAgents";
import { TableAgents } from "./styles";

export function TableListAgents() {
    return (
        <TableAgents>
            <thead>
                <LineHeadAgents />
            </thead>
            <tbody>
                <LineBodyAgents />
                <LineBodyAgents />
                <LineBodyAgents />
                <LineBodyAgents />
            </tbody>
        </TableAgents>
    )
}