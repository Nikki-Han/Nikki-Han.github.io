// All you JavaScript code for assignment 4 should be in this file
// import countries from "./a4-country-data";

window.onload = function () {

  subtitle = document.querySelector("#subtitle");
  table = document.querySelector("#outputTable");
  language = "English";

  generateTable("English", countries);

  // Create a <img> element
  function getImgElement(url, alt, height, width) {
    var image = document.createElement("img");

    image.setAttribute("src", url);
    image.setAttribute("alt", alt);

    if (height) image.setAttribute("height", height);
    if (width) image.setAttribute("width", width);
    return image;
  }
  //.appendChild(getImgElement("./flags/"+countries[i].Code+".png", "",20,35))

  function generateTable(language, countriesList) {
    var tableBody = document.createElement("tbody");

    // creating all rows and columns
    for (var i = 0; i < countriesList.length; i++) {
      // creates a table row
      var row = document.createElement("tr");
      for (var j = 0; j < 7; j++) {
        // creates a table column
        var col = document.createElement("td");
        switch (j) {
          case 0:
            col.appendChild(getImgElement("./flags/" + countriesList[i].Code + ".png", "", 20, 35));
            break;
          case 1:
            text = countriesList[i].Code;
            break;
          case 2:
            text = countriesList[i].Name[language];
            break;
          case 3:
            text = countriesList[i].Continent;
            break;
          case 4:
            text = countriesList[i].AreaInKm2;
            break;
          case 5:
            text = countriesList[i].Population;
            break;
          case 6:
            text = countriesList[i].Capital;
        }

        if (j != 0) {
          var cellText = document.createTextNode(text);
          col.appendChild(cellText);
        }
        row.appendChild(col);
      }
      // add the row to the end of the table body
      tableBody.appendChild(row);
    }
    // add the <tbody> in the <table>
    outputTable.appendChild(tableBody);
  };

  // The Country List item
  document.querySelector("#menu_1").onclick = function () {
    subtitle.innerHTML = "List of Countries and Dependencies";
  }

  // The By Population, “> 100,000,000” item
  document.querySelector("#menu_21").onclick = function () {
    subtitle.innerHTML = "List of Countries and Dependencies - Population greater than 100 million";
    table.removeChild(table.getElementsByTagName("tbody")[0]); // Remove first instance of body
    countriesList = countries.filter(country => country.Population > 100000000);
    generateTable(language, countriesList)
  };

  // The By Population, “1 ~ 2 million” item
  document.querySelector("#menu_22").onclick = function () {
    subtitle.innerHTML = "List of Countries and Dependencies - Population between 1 and 2 million";
    table.removeChild(table.getElementsByTagName("tbody")[0]); // Remove first instance of body
    countriesList = countries.filter(country => country.Population > 1000000 && country.Population < 2000000);
    generateTable(language, countriesList)
  };

  // The By Population, “1 ~ 2 million” item
  document.querySelector("#menu_31").onclick = function () {
    subtitle.innerHTML = "List of Countries and Dependencies - Area greater than 1 million Km2, Americas";
    table.removeChild(table.getElementsByTagName("tbody")[0]); // Remove first instance of body
    countriesList = countries.filter(country => country.AreaInKm2 >= 1000000 && country.Continent == "Americas");
    generateTable(language, countriesList)
  };

  // The By Population, “1 ~ 2 million” item
  document.querySelector("#menu_32").onclick = function () {
    subtitle.innerHTML = "List of Countries and Dependencies - All countries in Asia";
    table.removeChild(table.getElementsByTagName("tbody")[0]); // Remove first instance of body
    countriesList = countries.filter(country => country.Continent == "Asia");
    generateTable(language, countriesList)
  };

  // English
  document.querySelector("#menu_41").onclick = function () {
    subtitle.innerHTML = "List of Countries and Dependencies - Country / Dep. Name in English";
    table.removeChild(table.getElementsByTagName("tbody")[0]); // Remove first instance of body
    generateTable("English", countries);
  };

  // Arabic
  document.querySelector("#menu_42").onclick = function () {
    subtitle.innerHTML = "List of Countries and Dependencies - Country / Dep. Name in Arabic";
    table.removeChild(table.getElementsByTagName("tbody")[0]); // Remove first instance of body
    generateTable("Arabic", countries);
  };

  // Chinese
  document.querySelector("#menu_43").onclick = function () {
    subtitle.innerHTML = "List of Countries and Dependencies - Country / Dep. Name in Chinese (中文)";
    table.removeChild(table.getElementsByTagName("tbody")[0]); // Remove first instance of body
    generateTable("Chinese", countries);
  };

  // French
  document.querySelector("#menu_44").onclick = function () {
    subtitle.innerHTML = "List of Countries and Dependencies - Country / Dep. Name in French";
    table.removeChild(table.getElementsByTagName("tbody")[0]); // Remove first instance of body
    generateTable("Franch", countries);
  };
  // Hindi
  document.querySelector("#menu_45").onclick = function () {
    subtitle.innerHTML = "List of Countries and Dependencies - Country / Dep. Name in Hindi";
    table.removeChild(table.getElementsByTagName("tbody")[0]); // Remove first instance of body
    generateTable("Hindi", countries);
  };
  // Korean
  document.querySelector("#menu_46").onclick = function () {
    subtitle.innerHTML = "List of Countries and Dependencies - Country / Dep. Name in Korean";
    table.removeChild(table.getElementsByTagName("tbody")[0]); // Remove first instance of body
    generateTable("Korean", countries);
  };
  // Japanese
  document.querySelector("#menu_47").onclick = function () {
    subtitle.innerHTML = "List of Countries and Dependencies - Country / Dep. Name in Japanese";
    table.removeChild(table.getElementsByTagName("tbody")[0]); // Remove first instance of body

    generateTable("Japanese", countries);
  };
  // Russian
  document.querySelector("#menu_48").onclick = function () {
    subtitle.innerHTML = "List of Countries and Dependencies - Country / Dep. Name in Russian";
    table.removeChild(table.getElementsByTagName("tbody")[0]); // Remove first instance of body
    generateTable("Russian", countries);
  };
};