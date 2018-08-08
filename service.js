function Service() {

  let people = []

  function getPeople() {
    $.get("https://swapi.co/api/people").then(res => {
      console.log(res)
    }).catch(err => {
      console.error(err)
    })
  }

}