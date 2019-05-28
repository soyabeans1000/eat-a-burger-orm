const { fetch, alert } = window

document.addEventListener('click', e => {
  e.preventDefault()

  //if concierge Icon is clicked
  if (e.target.className === 'fas fa-concierge-bell') {
    let burgerID = e.target.getAttribute('data-id')
    let newValues = {}
    newValues.eaten = 'true'
    fetch(`/burgers/${burgerID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newValues)
    })
      .then(_ => {
        location.reload()
      })
      .catch(e => console.error(e))
  }
})

// If add button is clicked
document.querySelector('#addBurger').addEventListener('click', e => {
  e.preventDefault()
  if (document.querySelector('#burger_name').value != "") {
    fetch('/burgers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        burger_name: document.querySelector('#burger_name').value,
        eaten: false
      })
    })
      .then(_ => {
        location.reload()
      })
      .catch(e => console.error(e))
  }
  else {
    alert('Please enter Burger Name')
  }
})

