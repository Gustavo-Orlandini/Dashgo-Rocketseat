import { BrowserRouter } from "react-router-dom"
import { SidebarDrawerProvider } from "./contexts/SidebarDrawerContext"
import { Router } from './Router'

function App() {

  return (
    <SidebarDrawerProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </SidebarDrawerProvider>
  )
}

export default App
