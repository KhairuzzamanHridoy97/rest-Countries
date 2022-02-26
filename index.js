const loadCountries =()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}

const displayCountries =  countries =>{
    console.log(countries[0]);
    const container = document.getElementById('countries');
    const countryHTML = countries.map(country => getCountyHTML(country));
    container.innerHTML = countryHTML.join(' ')
    console.log(countryHTML[0])
}

const getCountyHTML = (country) =>{
    const{name,capital,flag} = country 
    return `
        <div class='country'>
            <h2>${name} </h2>
            <h4>${capital} </h4>
            <img src="${flag}" />

        </div>
    `
    
}


loadCountries();