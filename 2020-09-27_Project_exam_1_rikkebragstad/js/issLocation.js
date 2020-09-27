const baseUrl = "http://api.open-notify.org/";
const locationUrl = baseUrl + "iss-now.json";

async function getLocation() {

  try {

    const response = await fetch(locationUrl);
    const json = await response.json();

    displayLocation(json);

  } catch (error) {
   console.log(error);
  }
}

getLocation();

function displayLocation(json) {
  console.dir(json);

  const latitude = document.querySelector("#latitude");
     const longitude = document.querySelector("#longitude");
    

  let latitudeHtml = "";
      let longitudeHtml = "";

   latitudeHtml += `<p>Latitude: ${json.iss_position.latitude}</p>`;
    longitudeHtml += `<p> Longitude: ${json.iss_position.longitude}</p>`;
    
    latitude.innerHTML = latitudeHtml;
    longitude.innerHTML = longitudeHtml;
  }

