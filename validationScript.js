//Accessing the form
let myForm = document.getElementById('myForm')

//Adding event listener to the form on submission
myForm.addEventListener('submit', function (event) {
  //Accessing the input field value:
  let inputField = document.getElementById('inputField')
  inputVal = inputField.value

  //Testing the inputField for a valid input
  let isValid = /^[a-zA-Z0-9]*$/.test(inputVal)

  // Checking for errors:
  if (!(isValid)) {
    inputField.setCustomValidity('Please input alphanumeric characters only!')
    event.preventDefault();
  } else {
    inputField.setCustomValidity('')
    myForm.innerHTML = '<p>Thank you! Your form has been submitted</p>'
    myForm.submit()
  }
})

