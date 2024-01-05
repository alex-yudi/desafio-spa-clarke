import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Default } from './layouts/Default';
import { ListOfAgents } from './pages/ListOfAgents';
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path='/' element={<Home />} />
        <Route path='/list-of-agents' element={<ListOfAgents />} />
      </Route>
    </Routes>
  )
}