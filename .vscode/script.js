const form = document.querySelector('#form-habits')
const nLwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nLwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso ⛔")
    return
  }
  alert("Adicionado com sucesso✅")
  nLwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nLwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nLwSetup.setData(data)
nLwSetup.load()


