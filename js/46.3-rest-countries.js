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

/*--------------- destructuring ---------------*/
/*------------------ Option 1 ------------------*/
// const getCountryHTML = (country) => {
//   const { name, flags, capital, region, continents } = country;
//   return `
//         <div class="country">
//             <h2>${name?.common}</h2>
//             <img src="${flags?.png}">
//             <h5>Capital: ${capital}</h5>
//             <h6>Region: ${region}</h6>
//             <h6>Continents: ${continents}</h6>
//         </div>
//     `;
// };

/*--------- Option 2 [parameter destructuring] ---------*/
const getCountryHTML = ({ name, flags, capital, region, continents }) => {
  return `
        <div class="country">
            <h2>${name?.common}</h2>
            <img src="${flags?.png}">
            <h5>Capital: ${capital}</h5>
            <h6>Region: ${region}</h6>
            <h6>Continents: ${continents}</h6>
        </div>
    `;
};

loadCountries();
