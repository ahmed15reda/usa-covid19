let data = [];
let info = [];
let summary = [];


//https://cors-anywhere.herokuapp.com/

async function getTotalAPI() {
    const baseURL = `https://covidtracking.com/api/states`;
    const res = await fetch(baseURL);
    data = await res.json();

    const infoApi = `https://covidtracking.com/api/states/info`;
    const infoRes = await fetch(infoApi);
    info = await infoRes.json();

    const summaryApi = `http://covidtracking.com/api/us`;
    const summaryRes = await fetch(summaryApi);
    summary = await summaryRes.json();

    displayData();
    displaySummary();

}

getTotalAPI();

function displaySummary() {
    let mySummary = `
        <h1><img src="images/us-flag.png" width="60" border="1px solid #aaa"> United States</h1>
        <h2 class="cases">Coronavirus Cases:<br> <span>${summary[0].positive.toLocaleString()}</span></h2>
        <h2 class="deaths">Deaths:<br> <span>${summary[0].death.toLocaleString()}</span></h2>
        <h2 class="recovered">Recovered:<br> <span>${summary[0].recovered.toLocaleString()}</span></h2>
    `;

    document.getElementById("summary").innerHTML = mySummary;

}


function displayData() {
    let cartoona = ``;

    for (var i = 0; i < data.length; i++) {
        cartoona += `<tr>
        <td class="text-left">${info[i].name}</td>
        <td>${data[i].positive}</td>
        <td>${data[i].positiveIncrease}</td>
        <td>${data[i].death}</td>
        <td>${data[i].deathIncrease}</td>
        <td>${data[i].recovered != null ? data[i].recovered : "—"}</td>
        <td>${data[i].totalTestResults}</td>
        <td><a href="${info[i].covid19SiteOld}" target="_blank" class="btn btn-outline-success">Visit</a></td>
        
        </tr>`
    }

    document.getElementById("tableData").innerHTML = cartoona;
}

function searchState(searchTerm) {
    let anotherCartoona = ``;
    for (let i = 0; i < info.length; i++) {
        if (info[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true) {
            anotherCartoona += `<tr>
            <td class="text-left">${info[i].name}</td>
            <td>${data[i].positive}</td>
            <td>${data[i].positiveIncrease}</td>
            <td>${data[i].death}</td>
            <td>${data[i].deathIncrease}</td>
            <td>${data[i].recovered != null ? data[i].recovered : "—"}</td>
            <td>${data[i].totalTestResults}</td>
            <td><a href="${info[i].covid19SiteOld}" target="_blank" class="btn btn-outline-success">Visit</a></td>
            
            </tr>`
        }
        else {
            
        }

    }

    document.getElementById("tableData").innerHTML = anotherCartoona;

}