const url = "https://restcountries.com/v3.1/all";
const loadCountries = () => {
  fetch(url)
    .then((res) => res.json())
    .then((countries) => displayCountries(countries));
};

const displayCountries = (countries) => {
  console.log(countries[0]);
  const countriesHTML = countries.map((country) => getCountryHTML(country));
  // console.log(countriesHTML[8]);
  const container = document.getElementById("countries");
  container.innerHTML = countriesHTML.join(" ");
};

const getCountryHTML = (country) => {
  return `
        <div class="country">
            <h2>${country?.name?.common}</h2>
            <img src="${country?.flags?.png}">
        </div>
    `;
};

loadCountries();
