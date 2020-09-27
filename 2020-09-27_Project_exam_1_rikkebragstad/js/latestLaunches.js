const secondUrl = "https://api.spacexdata.com/";
const latestUrl = secondUrl + "v4/launches";

async function getLatest() {

  try {

    const response = await fetch(latestUrl);
    const json = await response.json();

    displayLatest(json);

   } catch (error) {
   console.log(error);
  }
}

getLatest();

function displayLatest(json) {
  console.dir(json);

  const container = document.querySelector("#latest");

  let html = "";

  for (i = 94; i < json.length && i < 112; i++) {
      
      if(!json[i].static_fire_date_utc) {
          continue
      }
     


    html += `

<div class="launch-container">
<h3 id="name">${json[i].name}</h2> 

<p id="flight-number"><b>Flightnumber:</b> ${json[i].flight_number}</p>
<p id="details"><b>Time:</b> ${json[i].static_fire_date_utc}</p>

                    </div>
`;
    container.innerHTML = html;
  }
}
