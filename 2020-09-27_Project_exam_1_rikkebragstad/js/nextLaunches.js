const thirdUrl = "https://api.spacexdata.com/";
const nextUrl = thirdUrl+"v4/launches/upcoming";

async function getNext() {

  try {

    const response = await fetch(nextUrl);
    const json = await response.json();

    displayNext(json);

  } catch (error) {
   console.log(error);
  }
}

getNext();

function displayNext(json) {
  console.dir(json);

  const container = document.querySelector("#next");

  let html = "";

  for (i = 0; i < json.length && i < 5; i++) {
      
      if(!json[i].date_local) {
          continue
      }
     


    html += `

<div class="launch-container">
<h3 id="name">${json[i].name}</h2> 

<p id="flight-number"><b>Flightnumber:</b> ${json[i].flight_number}</p>
<p id="details"><b>Time:</b> ${json[i].date_local}</p>

                    </div>
`;
    container.innerHTML = html;
  }
}
