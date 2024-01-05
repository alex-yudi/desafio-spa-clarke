import { TextContent } from "./components/TextContent";
import { ConsumptiomCalculador } from "./components/ConsumptionCalculator";
import { ContainerMain } from "./styles";

export function Home() {
  return (
    <ContainerMain>
      <TextContent />
      <ConsumptiomCalculador />
    </ContainerMain>
  )
}
