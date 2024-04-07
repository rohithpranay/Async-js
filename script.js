// "use strict";

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText("beforeend", msg);
//   countriesContainer.style.opacity = 1;
// };
// ///////////////////////////////////////

// // const getCountryData = function (country) {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// //   request.send();

// //   request.addEventListener('load', function () {
// //     let data;
// //     if (country.toLowerCase() === 'india') {
// //       [, data] = JSON.parse(this.responseText);
// //     } else {
// //       [data] = JSON.parse(this.responseText);
// //     }

// //     const html = `
// //       <article class="country">
// //         <img class="country__img" src="${data.flags.png}" />
// //         <div class="country__data">
// //           <h3 class="country__name">${data.name.common}</h3>
// //           <h4 class="country__region">${data.region}</h4>
// //           <p class="country__row"><span>👫</span>${(
// //             data.population / 1000000
// //           ).toFixed(1)}M</p>
// //           <p class="country__row"><span>🗣️</span>${
// //             Object.values(data.languages)[0]
// //           }</p>
// //           <p class="country__row"><span>💰</span>${
// //             Object.values(data.currencies)[0].name
// //           }</p>
// //         </div>
// //       </article>`;

// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };

// const renderCountry = function (data, className = "") {
//   const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           data.population / 1000000
//         ).toFixed(1)}M</p>
//         <p class="country__row"><span>🗣️</span>${Object.values(
//           data.languages
//         )}</p>
//         <p class="country__row"><span>💰</span>${
//           Object.values(data.currencies)[0].name
//         }</p>
//       </div>
//     </article>`;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };
// const getCountryAndNeighbour = function (country) {
//   // ajax call country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     let data;
//     if (country.toLowerCase() === "india") {
//       [, data] = JSON.parse(this.responseText);
//     } else {
//       [data] = JSON.parse(this.responseText);
//     }

//     // render country 1
//     renderCountry(data);
//     // get neighbour country(2)
//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     // ajax call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// // getCountryAndNeighbour('india');

// // const request2 = new XMLHttpRequest();
// // request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
// // request2.send();

// const getJson = function (url, errorMsg = "Something went worng") {
//   return fetch(url).then((response) => {
//     if (!response.status)
//       throw new Error("Country not found ${response.status}");

//     return response.json();
//   });
// };

// // const getCountryData = function (country) {
// //   fetch(`https://restcountries.com/v3.1/name/${country}`)
// //     .then(function (res) {
// //       if (!res.status) throw new Error('Country not found ${res.status}');

// //       return res.json();
// //     })
// //     .then(function (data) {
// //       renderCountry(data[0]);
// //       console.log(data);
// //       const [neighbour] = data[0].borders;
// //       console.log(neighbour);
// //       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
// //         .then(res => {
// //           if (!res.status) throw new Error('Country not found ${res.status}');
// //           return res.json();
// //         })
// //         .then(data => {
// //           console.log(data);
// //           renderCountry(data, 'neighbour');
// //         })
// //         .catch(err => renderError(err.message))
// //         .finally(() => {
// //           countriesContainer.style.opacity = 1;
// //         });
// //     });
// // };

// const getCountryData = function (country) {
//   getJson(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
//     .then((data) => {
//       console.log(data);
//       renderCountry(data[0]);
//       const [neighbour] = data[0].borders;
//       if (!neighbour) throw new Error("NO neighbour found!!");

//       return getJson(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         "country not found"
//       );
//     })

//     .then((data) => {
//       console.log(data);
//       renderCountry(data[0], "neighbour");
//     })
//     .catch((err) => renderError(err.message))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("portugal");
// });
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function whereAmI(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res) => {
      if (!res.ok) throw new Error("too many requests");
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err.message));
}

whereAmI(52.508, 13.381);

const wait = function (secs) {
  return new Promise((res) => {
    setTimeout(res, secs * 1000);
  });
};
