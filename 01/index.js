const contatos = [
	{ nome: "Pedro", fone: "99999999" },
	{ nome: "Tati", fone: "98999999" },
	{ nome: "Taro", fone: "98999998" },
]

const root = document.getElementById("root") 

const titulo = (nome) => {
	h2 = document.createElement("h2")
	h2.innerText = nome
	return h2
}

const inputText = () => {
	i = document.createElement("input")
	i.setAttribute("name", "nome")
	i.setAttribute("type", "text")
	return i
}

const inputTel = () => {
	i = document.createElement("input")
	i.setAttribute("name", "fone")
	i.setAttribute("type", "tel")
	return i
}

const inputSubmit = () => {
	i = document.createElement("input")
	i.setAttribute("type", "submit")
	return i
}

const handleSubmit = (e) => {
	e.preventDefault()
	const formData = new FormData(e.target)
	const contato = {}
	formData.forEach((v, k) => contato[k] = v)
	contatos.push(contato)
	NavegaPara("Meus Contatos")
}

const FormContato = () => {
	const form = document.createElement("form");
	const text = inputText() 
	const tel =  inputTel() 
	const submit = inputSubmit() 
	form.appendChild(text)
	form.appendChild(tel)
	form.appendChild(submit)
	form.addEventListener("submit", handleSubmit)
	return form
}

const ListaContato = () => {
	const table = document.createElement("table")
	contatos.forEach((contato) => {
		const h3 = document.createElement("h3")
		h3.innerHTML = contato.nome

		const h4 = document.createElement("h4")
		h4.innerHTML = contato.fone

		const td = document.createElement("td")
		td.append(h3)
		td.append(h4)

		const tr = document.createElement("tr")
		tr.append(td)
		table.append(tr)
	})
	return table
}


const MeusContatos = () => {
	root.append(titulo("Meus Contatos"))
	root.append(ListaContato())
}

const NovoContato = () => {
	root.append(titulo("Novo Contato"))
	root.append(FormContato(contatos))
}

const LimpaConteudo = () => {
	const children = [...root.children]
	children.forEach((c) => c.remove())
}

const AtivaLink = (rota) => {
	links = document.querySelectorAll("a")
	links.forEach((l) => {
		l.innerHTML !== rota ? l.classList.remove("ativo") : l.classList.add("ativo")
	})
}   

const NavegaPara = (rota) => {
	LimpaConteudo()	
	AtivaLink(rota)
	rota === "Meus Contatos" ? MeusContatos() : NovoContato() 
}

const AdicionaClickListener = () => {
	links = document.querySelectorAll("a")
	links.forEach(a => a.addEventListener("click", (e) => {
		e.preventDefault()
		NavegaPara(a.innerHTML)
	}))
}

AdicionaClickListener()
NavegaPara("Meus Contatos")
