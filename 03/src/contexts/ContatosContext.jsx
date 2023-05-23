import { createContext } from "react"

const ContatosContext = createContext({
  meusContatos: [],
  incluirContato: () =>{},
})

export default ContatosContext
