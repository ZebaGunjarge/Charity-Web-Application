fetch('http://localhost:5000/api/donations')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });