

const provinces = document.querySelector('select');
// const searchList = document.querySelector('#country');
// const nameProvince = document.querySelector('#name-province');
const phConfirmed = document.querySelector('.ph-confirmed');
const phDeaths = document.querySelector('.ph-deaths');
const phCovered = document.querySelector('.ph-recovered');

const phCasesData = "assets/js/PHCases.json";

async function phCovidData(provinceData){
   provinces.innerHTML = '<option value=""></option>';    
    const res = await fetch(phCasesData);       
    const data = await res.json();
    console.log(data);    

if(res.status === 4 || res.status === 200){       

        data.forEach( function(items){
            const option = document.createElement('option');
            option.value = items.Province;
            option.textContent= items.Province;
            provinces.appendChild(option);
            console.log(items.Cases + items.Province)

        if(provinceData === items.Province){
            phConfirmed.children[1].textContent = items.Cases;
            phDeaths.children[1].textContent = items.Deaths;
            phRecovered.children[1].textContent = items.Recovered;         

        //  nameProvince.textContent = item.Province;
        }
        })

    }else{
        
    }
}


phCovidData(provinces.value);

const btnFind = document.querySelector('button');
btnFind.addEventListener('click', function(e){
    e.preventDefault();
    phCovidData(provinces.value);    
    searchList.value = '';
})

