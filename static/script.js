function handleEmergencyType() {
    var emergencyTypeSelect = document.getElementById("emergency-type");
    var specificEmergencySelect = document.getElementById("specific-emergency");
    var proceedButton = document.getElementById("proceed-button");

    specificEmergencySelect.disabled = false;
    specificEmergencySelect.innerHTML = "";

    if (emergencyTypeSelect.value === "") {
        specificEmergencySelect.disabled = true;
        proceedButton.disabled = true;
    } else {
        if (emergencyTypeSelect.value === "natural-disasters") {
            var naturalDisasters = ["Earthquakes", "Floodings", "Wildfires", "Hurricanes"];
            for (var i = 0; i < naturalDisasters.length; i++) {
                var option = document.createElement("option");
                option.text = naturalDisasters[i];
                specificEmergencySelect.add(option);
            }
        } else if (emergencyTypeSelect.value === "medical-emergencies") {
            var medicalEmergencies = ["Heart Attacks", "Allergic Reactions", "Seizures", "Snake Bites"];
            for (var j = 0; j < medicalEmergencies.length; j++) {
                var option = document.createElement("option");
                option.text = medicalEmergencies[j];
                specificEmergencySelect.add(option);
            }
        } else if (emergencyTypeSelect.value === "fire-incidents") {
            var fireIncidents = ["Building Fire", "Gas Leak", "Vehicle Fire"];
            for (var k = 0; k < fireIncidents.length; k++) {
                var option = document.createElement("option");
                option.text = fireIncidents[k];
                specificEmergencySelect.add(option);
            }
        } else if (emergencyTypeSelect.value === "criminal-activity") {
            var criminalActivity = ["Burglary", "Assault", "Robbery", "Theft"];
            for (var l = 0; l < criminalActivity.length; l++) {
                var option = document.createElement("option");
                option.text = criminalActivity[l];
                specificEmergencySelect.add(option);
            }
        } else if (emergencyTypeSelect.value === "criminal-offenses") {
            var criminalOffenses = ["Victim of Trafficking", "Witness of Trafficking", "Blackmailing"];
            for (var m = 0; m < criminalOffenses.length; m++) {
                var option = document.createElement("option");
                option.text = criminalOffenses[m];
                specificEmergencySelect.add(option);
            }
        }

        proceedButton.disabled = false;
    }
}

function loadArticle() {
    var specificEmergencySelect = document.getElementById("specific-emergency");
    var articleContainer = document.getElementById("article-container");

    var articlePath = "/articles/" + specificEmergencySelect.value.toLowerCase().replace(/ /g, '-') + ".html";

    if (specificEmergencySelect.value !== "") {
        fetch(articlePath)
            .then(response => response.text())
            .then(data => {
                articleContainer.innerHTML = data;
            })
            .catch(error => {
                console.log("Error loading article:", error);
            });
    }
}
function emergencyNumbers() {
  // Get the selected nationality and country
  console.log("emergencyNumbers() function called");

  var nationalitySelect = document.getElementById("nationality-select");
  var countrySelect = document.getElementById("country-select");
  var nationality = nationalitySelect.value;
  var country = countrySelect.value;

  // Create a data object with the search data
  var searchData = {
    search_data: { nationality: nationality, country: country },
  };

  // Make a POST request to the backend /search route
  fetch("/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(searchData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Display the generated links on the page
      var linksContainer = document.getElementById("links-container");
      linksContainer.innerHTML = "";

      data.forEach((link) => {
        var linkElement = document.createElement("a");
        linkElement.href = link;
        linkElement.target = "_blank";
        linkElement.textContent = link;
        linksContainer.appendChild(linkElement);
        linksContainer.appendChild(document.createElement("br"));
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
