import { ReactNode, useEffect, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../../lib/axios'
import { DataAgents } from '../../@types/dataAgents'

type AgentsContextType = {
  fetchExample: () => void,
  listOfAgents: DataAgents[]
}

type AgentsStoreProviderProps = {
  children: ReactNode
}

export const AgentsContext = createContext<AgentsContextType>(
  {} as AgentsContextType,
)

export function AgentsProvider({ children }: AgentsStoreProviderProps) {
  const [listOfAgents, setListOfAgents] = useState<DataAgents[]>([])

  const fetchExample = useCallback(async () => {
    try {
      const resultQuery = await api.post('/graphql', {
        query: ` 
          query {
              fetchAgents {
              id,
              name,
              link_logo,
              state_origin,
              cost_kwh,
              lim_min_kwh,
              total_customers,
              evaluation_customers
              }}
          `
      })

      const listOfAgents = resultQuery.data.data.fetchAgents
      setListOfAgents(listOfAgents)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {

  }, [fetchExample])
  return (
    <AgentsContext.Provider
      value={{ fetchExample, listOfAgents }}
    >
      {children}
    </AgentsContext.Provider>
  )
}