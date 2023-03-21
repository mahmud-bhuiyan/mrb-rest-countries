const url = "https://restcountries.com/v3.1/all";
const loadCountries = () => {
  fetch(url)
    .then((res) => res.json())
    .then((countries) => displayCountries(countries));
};

const displayCountries = (countries) => {
  console.log(countries);
  const countriesHTML = countries.map((country) => getCountryHTML(country));
};

const getCountryHTML = (country) => {
  return `
        <div>
            <h2>${country.name.common}</h2>
        </div>
    `;
};

loadCountries();
