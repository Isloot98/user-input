const form = document.getElementById('form');                                                                         
form.addEventListener('submit', (e) => {
  e.preventDefault();

  //create formData object and turn it into regular object
  const formData = new FormData(form);
  const message = formData.get("message");
  const data = { message: message };

//fetch can also take an options object                               
fetch('http://localhost:6060/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
})