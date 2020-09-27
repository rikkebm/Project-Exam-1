const firstUrl = "http://api.open-notify.org/";
const astroUrl = firstUrl + "astros.json";

async function getNumber() {

  try {

    const response = await fetch(astroUrl);
    const json = await response.json();

    displayNumber(json);

  } catch (error) {
   console.log(error);
  }
}

getNumber();

function displayNumber(json) {
  console.dir(json);
    
 const container = document.querySelector("#astronaut-text");

  let html = "";


    html += `
<p>there are people in space right this second? Actually there are ${json.number} astronauts in space right now. Their names are:</p>
<p id="white">${json.people[0].name}, 
${json.people[1].name} and 
${json.people[2].name}.</p>

`;
    container.innerHTML = html;
  }


