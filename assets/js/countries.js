/*

window.onload = function () {
    // getCovidData();
};


// APP Variables
let app_data =[], 
    cases_list =[],
    recovered_list =[],
    deaths =[];
    
//Get User Country List
let user_country;


// API Section 

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

  
        let country_name_element = document.querySelector(".country .country");
        let total_cases_element = document.querySelector(".total-cases .value");        
        let recovered_element = document.querySelector(".recovered .value");
        let deaths_element = document.querySelector(".deaths .value");

       

function getCovidData(user_country) {
  fetch("https://api.covid19api.com/summary", requestOptions)
    .then(function(resp) {return resp.json()})
    .then(function(data) {

        

        let totalCase = data.Global.TotalConfirmed;
        let totalRecovery = data.Global.TotalRecovered;
        let totalDeath = data.Global.TotalDeaths;
        let dailyCase = data.Global.NewConfirmed;
        let dailyRecovery = data.Global.NewRecovered;
        let dailyDeath = data.Global.NewDeaths;

        document.querySelector('.global-case').innerHTML = totalCase.toLocaleString('en');
        document.querySelector('.global-recovery').innerHTML = totalRecovery.toLocaleString('en');
        document.querySelector('.global-death').innerHTML = totalDeath.toLocaleString('en');
        document.querySelector('.global-daily-cases').innerHTML = dailyCase.toLocaleString('en');
        document.querySelector('.global-daily-recovery').innerHTML = dailyRecovery.toLocaleString('en');
        document.querySelector('.global-daily-deaths').innerHTML = dailyDeath.toLocaleString('en');
        })     
    }
   // .catch(function(){
   //     console.log("error");
// }
    // setTimeout(getCovidData, 43,200,000) // this will update every 12 hrs    


*/

const countries = document.querySelector('datalist');
const search = document.querySelector('#search-input');
const date = document.querySelector('#date');
const nameCountry = document.querySelector('#name-country');
const confirmed = document.querySelector('.confirmed');
const deaths = document.querySelector('.deaths');
const recovered = document.querySelector('.recovered');

const globalCases = document.querySelector('.global-case');
const globalDeaths = document.querySelector('.global-death');
const globalRecovery = document.querySelector('.global-recovery');
const globalDailyCases = document.querySelector('.global-daily-cases');
const globalDailyDeaths = document.querySelector('.global-daily-deaths');
const globalDailyRecovery = document.querySelector('.global-daily-recovery');


const API_URL = "https://api.covid19api.com/summary";

async function covidData(country){
    countries.innerHTML = '<option value="Global">Global</option>';    
    const res = await fetch(API_URL);    
    const data = await res.json();    

    if(res.status === 4 || res.status === 200){
        date.textContent = new Date(data.Date).toDateString();

        if(country === '' || country === 'World') {
        const {TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed, NewDeaths, NewRecovered} = data.Global;

        globalCases.children[1].textContent = TotalConfirmed;
        globalDeaths.children[1].textContent = TotalDeaths;
        globalRecovery.children[1].textContent = TotalRecovered;
        globalDailyCases.children[1].textContent = NewConfirmed;
        globalDailyDeaths.children[1].textContent = NewDeaths;
        globalDailyRecovery.children[1].textContent = NewRecovered;

         nameCountry.textContent = "";
    };

        data.Countries.forEach( function(item){
            const option = document.createElement('option');
            option.value = item.Country;
            option.textContent= item.Country;
            countries.appendChild(option);

        if(country === item.Country){
        confirmed.children[1].textContent = item.TotalConfirmed;
         deaths.children[1].textContent = item.TotalDeaths;
         recovered.children[1].textContent = item.TotalRecovered;

         

         nameCountry.textContent = item.Country;
        }
        })

    }else{
        
    }
}

const speed = 21600000;

covidData(search.value);

const btnSearch = document.querySelector('button');
btnSearch.addEventListener('click', function(e){
    e.preventDefault();
    covidData(search.value);    
    search.value = '';
})