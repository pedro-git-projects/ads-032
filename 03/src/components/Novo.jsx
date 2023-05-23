import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import ContatosContext from "../contexts/ContatosContext"
import Nav from "./Nav"

const Novo = () => {
  const [contato, setContato] = useState({ nome: "", telefone: "" })
  const { incluirContato } = useContext(ContatosContext)
  const navigate = useNavigate()

  const { nome, telefone } = contato

  const onSubmit = (e) => {
    e.preventDefault()
    const formData = {
      nome: nome,
      telefone: telefone,
    }
    incluirContato(formData)
    navigate("/")
  }

  const onChange = (e) => {
    setContato({ ...contato, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div>
        <Nav />
      </div>
      <div>
        <h1>Novo Contato</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={nome}
            onChange={onChange}
          />
          <input
            type="text"
            name="telefone"
            placeholder="Telefone"
            value={telefone}
            onChange={onChange}
          />
          <button type="submit">Adicionar Contato</button>
        </form>
      </div>
    </>  
  )
}

export default Novo
