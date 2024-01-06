import { ReactNode, useEffect, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../../lib/axios'
import { DataAgents } from '../../@types/dataAgents'

type SuccessReq = {
  error: false,
  status: number,
  data: DataAgents[],
}
type ErrorReq = {
  error: true,
  status: number,
  errorMesssage: string,
}

type ResultQuery = SuccessReq | ErrorReq

type AgentsContextType = {
  fetchExample: (lim_min_kwh: number) => Promise<ResultQuery>,
  listOfAgents: DataAgents[],
  showLoadingCalculating: boolean,
}

type AgentsStoreProviderProps = {
  children: ReactNode
}

export const AgentsContext = createContext<AgentsContextType>(
  {} as AgentsContextType,
)

export function AgentsProvider({ children }: AgentsStoreProviderProps) {
  const [listOfAgents, setListOfAgents] = useState<DataAgents[]>([])
  const [showLoadingCalculating, setShowLoadingCalculating] = useState<boolean>(false)

  const fetchExample = useCallback(async (lim_min_kwh: number): Promise<ResultQuery> => {
    try {
      setShowLoadingCalculating(true)
      const resultQuery = await api.post('/graphql', {
        query: ` 
          query fetchAgentsByMinKwh($limMinKwh: Float!){
            fetchAgentsByMinKwh(lim_min_kwh: $limMinKwh) {
              id,
              name,
              link_logo,
              state_origin,
              cost_kwh,
              lim_min_kwh,
              total_customers,
              evaluation_customers
              }}
          `,
        variables: {
          limMinKwh: lim_min_kwh
        }
      })
      const listOfAgents = resultQuery.data.data.fetchAgentsByMinKwh
      setListOfAgents(listOfAgents)
      return {
        error: false,
        status: resultQuery.status,
        data: listOfAgents
      }
    } catch (error: unknown) {
      return {
        error: true,
        status: 500,
        errorMesssage: error as string
      }
    } finally {
      setShowLoadingCalculating(false)
    }
  }, [])

  useEffect(() => {

  }, [fetchExample])
  return (
    <AgentsContext.Provider
      value={{ fetchExample, listOfAgents, showLoadingCalculating }}
    >
      {children}
    </AgentsContext.Provider>
  )
}