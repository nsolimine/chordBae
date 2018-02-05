var chords = [];

(function startFetching() {
  const majAPI = "major.json";
  fetch(majAPI)
  .then(response => response.json())
  .then(data =>
    {chords = data
  })
  .catch(console.error)
})();

document.querySelector("#dropdown").addEventListener("change", function(event) {
  event.preventDefault();
  var selectedKey = event.target.value
  filterChords(chords, selectedKey);
});

function toggle() {
  document.querySelector("span").classList.toggle("hidden")
};

function toggleSuggest() {
  document.querySelector("aside").classList.toggle("hidden")
}

function displayChords(key, chord1, chord2, chord3, chord4, chord5, chord6, chord7) {
  const chordDiv = document.querySelector("#chordsDiv")
  chordDiv.innerHTML = `
    <li class="display">
      <p class="key bg-info animated fadeIn">${key}</p>

      <div class="animated fadeIn bank">

        <div class="numeral">
          <p class="bg-info major-circle">I</p>
          <img src="${chord1}" alt="chord1">
        </div>
        <div class="numeral">
          <p class="bg-info major-circle">ii</p>
          <img src="${chord2}" alt="chord2">
        </div>
        <div class="numeral">
          <p class="bg-info major-circle">iii</p>
          <img src="${chord3}" alt="chord3">
        </div>
        <div class="numeral">
          <p class="bg-info major-circle">IV</p>
          <img src="${chord4}" alt="chord4">
        </div>
        <div class="numeral">
          <p class="bg-info major-circle">V</p>
          <img src="${chord5}" alt="chord5">
        </div>
        <div class="numeral">
          <p class="bg-info major-circle">vi</p>
          <img src="${chord6}" alt="chord6">
        </div>
        <div class="numeral">
          <p class="bg-info major-circle">vii°</p>
          <img src="${chord7}" alt="chord7">
        </div>
      </div>

        <div class="button">
        <button name="progression-ideas" class="animated fadeIn bg-success" id="progression-button" onclick="toggle()">Get Progression Ideas!</button>
          <span class="hidden">
            <ul class="progression-list animated fadeIn">
              <li>Pop: I – V – vi – IV</li>
              <li>Rock and Roll: I - IV - V</li>
              <li>Blues: I – I – I – I – IV – IV – I – I – V – IV – I – I</li>
              <li>Jazz: ii - V - I</li>
              <li>50's: I - vi - IV - V</li>
              <li>Modern Pop: I – vi – ii – V</li>
              <li>Gloomy: vi – IV – I – V</li>
              <li>Classical: I – V – vi – iii – IV</li>
            </ul>
          </span>
        </div>

    </li>
  `
  return chordDiv.innerHTML
};

function filterChords(chords, id) {
  var majorChords = chords
  var filtered = majorChords.filter((key, index) => {
  return key.id === id
  })
  for (var i = 0; i < filtered.length; i++) {
    let key = filtered[i]['id'];
    let chord1 = filtered[i]['i'];
    let chord2 = filtered[i]['ii'];
    let chord3 = filtered[i]['iii'];
    let chord4 = filtered[i]['iv'];
    let chord5 = filtered[i]['v'];
    let chord6 = filtered[i]['vi'];
    let chord7 = filtered[i]['vii'];
    displayChords(key, chord1, chord2, chord3, chord4, chord5, chord6, chord7)
  }
};
