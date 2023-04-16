
const submitData = {
    userName:"",
    userEmail:""

  };
  
  const userObj = {
    method:'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(submitData),
  };
  
  fetch('http://localhost:3000/users', userObj)
    .then(function (response) {
      return response.json();
    })
    .then(function (userObj) {
      console.log(userObj);
    })
    .catch(error => console.log('Error submitting data:', error));
    