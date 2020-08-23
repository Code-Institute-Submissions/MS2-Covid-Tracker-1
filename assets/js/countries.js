// App Variables

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

// Generating Covid19 API

const API_URL = "https://api.covid19api.com/summary";

async function covidData(country){
    countries.innerHTML = '<option value="Global">Global</option>';      
    const res = await fetch(API_URL);    
    const data = await res.json();    
    console.log(data)

    if(res.status === 4 || res.status === 200){
        date.textContent = new Date(data.Date).toDateString();

        if(country === '' || country === 'World') {
        const {TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed, NewDeaths, NewRecovered} = data.Global;
        // Confirmed Cases
        globalCases.children[1].textContent = TotalConfirmed;
        globalDailyCases.children[1].textContent = NewConfirmed;
        // Deaths Cases
        globalDeaths.children[1].textContent = TotalDeaths;
        globalDailyDeaths.children[1].textContent = NewDeaths;
         // Receovered Cases
        globalRecovery.children[1].textContent = TotalRecovered;            
        globalDailyRecovery.children[1].textContent = NewRecovered;

        nameCountry.textContent = "The World";         
    };

        data.Countries.forEach( function(item){
            const option = document.createElement('option');
            option.value = item.Country;
            option.textContent= item.Country;
            countries.appendChild(option);

        if(country === item.Country){
            // Confirm Cases per Country
            confirmed.children[1].textContent = item.TotalConfirmed;
            // Death Cases per Country
            deaths.children[1].textContent = item.TotalDeaths;
            // Recovered Cases per Country
            recovered.children[1].textContent = item.TotalRecovered;        

            nameCountry.textContent = item.Country;
        }
        })

    }else{
        
    }    
}

covidData(search.value);

const btnSearch = document.querySelector('button');
btnSearch.addEventListener('click', function(e){
    e.preventDefault();
    covidData(search.value);    
    search.value = '';
})