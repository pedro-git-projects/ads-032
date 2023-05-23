import React, { useContext } from "react"
import ContatosContext from "../contexts/ContatosContext"
import Nav from "./Nav"

const Home = () => {
  const { meusContatos } = useContext(ContatosContext)

  return (
    <>
      <div>
        <Nav />
      </div>
      <div>
        <h1>Lista de Contatos</h1>
        <ul>
          {meusContatos.map((contato, key) => (
            <li key={key}>
              {contato.nome} - {contato.telefone}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Home
