const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()

  const height= parseInt(document.querySelector('#height').value)
  const weight= parseInt(document.querySelector('#weight').value)
  const results= document.querySelector('#results')
  const range = document.querySelector('#range')
  if(height===''|| height<20 || isNaN(height)){
    results.innerHTML = `Please Enter Valid Height: ${height}`;
  } else if(weight===''|| weight<5 || isNaN(weight)){
    results.innerHTML = `Please Enter Valid weight: ${weight}`;
  }else{
    const bmi = (weight/((height*height)/10000)).toFixed(3);
    results.innerHTML =`<span>Your BMI is ${bmi}</span>`

    if(bmi<18.6){
      range.innerHTML = '<span>Oops! You Are Underweight</span>'
    }
    if(bmi>=18.6 && bmi<24.9){
      range.innerHTML = '<span>Congratulations! You Have Normal BMI</span>'
    }
    if(bmi>24.9){
      range.innerHTML = '<span>Oops! You Are Overweight</span>'
    }
  }
  
})