 const btn = document.querySelector('#btn')

 btn.addEventListener('click', event => {
   event.preventDefault()

   const form = document.querySelector('#form')
   const name_input = document.forms['form']['name']
   const monthly = document.querySelector('#monthly')
   const time = document.querySelector('#time')
   const tax = document.querySelector('#tax')

  const monthlyParse = parseFloat(monthly.value)
  const timeParse = parseFloat(time.value)
  const taxParse = (parseFloat(tax.value) / 100)
  
  console.log(monthlyParse)
  console.log(timeParse)
  console.log(taxParse)
  

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
 .then(resolve =>resolve.json())
 .then(data =>{

    const result = parseFloat(data.result).toFixed(2)
    
  
 })
 })


