const APIKEY = "4ebb80a4b92c205f334f029abb83b331";
let URL = `http://api.openweathermap.org/data/2.5/weather?q={city}}&appid=${APIKEY}`;

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector("#inputCity").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = data.name;
  })
  .catch((err) => console.log("err" + err));

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let city = document.querySelector("#inputCity").value;
});
