 const btn = document.querySelector('#btn')

 btn.addEventListener('click', event => {
   event.preventDefault()

  const name_input = document.forms['form']['name']
  const monthly = document.querySelector('#monthly')
  const time = document.querySelector('#time')
  const tax = document.querySelector('#tax')
  const containter_inputs = document.querySelector('#container-inputs')

  const monthlyParse = parseFloat(monthly.value)
  const timeParse = parseFloat(time.value)
  const taxParse = (parseFloat(tax.value) / 100)
  

const calc = {
  expr: `${monthlyParse} * (((1 + ${taxParse}) ^ ${timeParse} - 1) / ${taxParse})`
}

 fetch('http://api.mathjs.org/v4/',{
   method: 'post',
   headers: {
     'content-type': 'application/json'
   },
   body: JSON.stringify(calc)
 })
 .then(resolve => resolve.json())
 .then(data =>{

    const result = parseFloat(data.result)
    const span = document.querySelector('#span')

    if(!name_input.value || !monthly.value || !time.value || !tax.value){
      
      span.classList.add('error')
      span.textContent = 'Preencha todos os dados'

      
    }else{

      span.classList.remove('error')
      span.textContent = ''

      

      containter_inputs.innerHTML = 
      `
      <h1> Olá ${name_input.value}, juntando ${monthlyParse.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} reais todo mês você terá ${result.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} reais em ${timeParse / 12} anos.</h1>

      <button id="btn-return"> Similar novamente </button>
      `
    }
   
    



 })

 
 })


