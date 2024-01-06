import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import * as z from "zod";

import { Calculator, ContainerCalculator, ContainerInput, ContainerTextHelper, ErrorInput, Form, InputNumber, Label } from "./styles";
import { SchemaCalculatorData } from "../../../../utils/schemas/calculatorDataSchema";
import { Button } from "../../../../components/Button";
import { api } from "../../../../lib/axios";
import { AgentsContext } from "../../../../stores/contexts/agentsStore";

type InputCalculatorValues = z.input<typeof SchemaCalculatorData>;
type OutputCalculatorValues = z.output<typeof SchemaCalculatorData>;
type CalculateConsumptionProps = InputCalculatorValues | OutputCalculatorValues;

export function ConsumptiomCalculador() {
    const { fetchExample, listOfAgents } = useContextSelector(AgentsContext, (context) => context);
    const navitageTo = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputCalculatorValues>({
        resolver: zodResolver(SchemaCalculatorData),
    });

    const handleCalculateConsumption = async ({ valueKw }: CalculateConsumptionProps) => {
        await fetchExample(valueKw as number)
        navitageTo('/list-of-agents')
    }
    return (
        <ContainerCalculator>
            <Calculator>
                <Form onSubmit={handleSubmit(handleCalculateConsumption)}>
                    <h2>Calculadora de consumo</h2>
                    <ContainerInput>
                        <Label htmlFor="valueKwh">Informe seu consumo mensal de energia</Label>
                        <InputNumber
                            type="number"
                            placeholder="Quantidade de Kwh"
                            min={0}
                            id="valueKwh"
                            {...register("valueKw")}
                        />
                        <ErrorInput>
                            {errors.valueKw && <span>{errors.valueKw.message}</span>}
                        </ErrorInput>
                    </ContainerInput>
                    <Button
                        type="submit"
                    >
                        Calcular
                    </Button>
                </Form>

                <ContainerTextHelper>
                    <p>
                        A partir dos valores fornecidos, o nosso sistema irá verificar quais serão os melhores fornecedores de energia para você.
                    </p>
                </ContainerTextHelper>
            </Calculator>
        </ContainerCalculator>
    )
}