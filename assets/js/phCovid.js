// Covid data variables
const provinces = document.querySelector('select');
const phConfirmed = document.querySelector('.ph-confirmed');
const phDeaths = document.querySelector('.ph-deaths');
const phRecovered = document.querySelector('.ph-recovered');
const nameProvince = document.querySelector('#name-province');

// Chart Variables 
const genderChart = document.querySelector('.gender-chart');
const ageChart = document.querySelector('.age-chart');
let dataGenderChart = [];
let dataAgeChart = [];

// Internal Json 
const phCasesData = "assets/js/PHCases.json";

async function phCovidData(provinceData){
    
   provinces.innerHTML = '<option value=""></option>';    
    const res = await fetch(phCasesData);       
    const data = await res.json();
    resetValue(phConfirmed);
    resetValue(phDeaths);
    resetValue(phRecovered);   
    //resetValue(genderChart);
    //resetValue(ageChart);
    
    console.log(data);    

if(res.status === 4 || res.status === 200){       

        if(provinceData === '' || provinceData === 'World') {


        }

// Looping through the json file 

        data.forEach( function(items){
            var option = document.createElement('option');
            option.value = items.Province;
            option.textContent= items.Province;
            provinces.appendChild(option);           
            console.log(items.AgeGapE);             

        if(provinceData === items.Province){

//Data loop to generate covid data per province 

            phConfirmed.children[1].textContent = items.Cases;
            phDeaths.children[1].textContent = items.Deaths;
            phRecovered.children[1].textContent = items.Recovered;                                    

            nameProvince.textContent = items.Province;
// Data loop to generate chart using Chart JS

            dataGenderChart = [items.Male, items.Female];     
            dataAgeChart = [items.AgeGapA, items.AgeGapB, items.AgeGapC, items.AgeGapD, items.AgeGapE, items.AgeGapF, items.AgeGapG, items.AgeGapH];            
            drawGenderChart(dataGenderChart);
            drawAgeChart(dataAgeChart);
            
        }
        
     });
            
    }else{
        chart.innerHTML = `<h2>Loading.....</h2>`;
    }
};

function resetValue(element){
    element.children[1].textContent = 0;  

}

// Creating the Chart for Gender Demography

function drawGenderChart(data) {     
    genderChart.innerHTML = '';
    const ctx = document.createElement('canvas');
    genderChart.appendChild(ctx);
    const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Male', 'Female'],
        datasets: [{     
            data: data,
            backgroundColor: ['blue' , 'pink'],
            borderWidth: 1
        }]
    },
    options: { 
        responsive: true,
    }
});
    
};

// Creating the Chart for Age Gap Demography

function drawAgeChart(data) {  
    ageChart.innerHTML = '';   
    const ctx = document.createElement('canvas');
    ageChart.appendChild(ctx);
    var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['0 to 9', '9 to 19"', '20 to 29', '30 to 39', '40 to 49', '50 to 59', '60 to 69', '0 and above'],
        datasets: [{      
            data: data,
            backgroundColor: ['yellow', 'purple', 'green', 'orange','magenta', 'cyan', 'red','indigo'],            
            borderWidth: 1
        }]
    },
    options: { }
});
};


phCovidData(provinces.value);

const btnFind = document.querySelector('#country');
btnFind.addEventListener('click', function(e){
    e.preventDefault();
    phCovidData(provinces.value);    
    provinces.value = '';
});

