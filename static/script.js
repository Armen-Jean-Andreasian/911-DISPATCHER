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
  var nationalitySelect = document.getElementById("nationality-select");
  var countrySelect = document.getElementById("country-select");
  var nationality = nationalitySelect.value;
  var country = countrySelect.value;

  var searchData = {
    search_data: { nationality: nationality, country: country },
  };

  fetch("/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(searchData),
  })
    .then((response) => response.json())
    .then((data) => {
      var linksContainer = document.getElementById("links-container");
      linksContainer.innerHTML = "";

      data.forEach((link) => {
        var linkName = getLinkName(link);

        var linkButton = document.createElement("button");
        linkButton.classList.add("link-button");

        linkButton.textContent = linkName;
        linkButton.addEventListener("click", function() {
          window.open(link, "_blank");
        });

        linksContainer.appendChild(linkButton);
        linksContainer.appendChild(document.createElement("br"));
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function getLinkName(link) {
  var name = "";

  if (link.includes("embassy")) {
    name = "Your embassy";
  } else if (link.includes("police")) {
    name = "Emergency Police Number";
  } else if (link.includes("ambulance")) {
    name = "Emergency Ambulance Number";
  } else if (link.includes("fire")) {
    name = "Emergency Fire Number";
  } else if (link.includes("rescue")) {
    name = "Rescue Service Number";
  } else if (link.includes("human+rights+watch")) {
    name = "Human Rights Watch";
  } else if (link.includes("Red%20Cross")) {
    name = "Red Cross";
  }

  return name;
}
