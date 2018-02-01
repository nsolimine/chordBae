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
      <p class="key bg-info">${key}</p>

      <div class="animated fadeIn">

        <div class="numeral">
          <p>I</p>
          <img src="${chord1}" alt="chord1">
        </div>
        <div class="numeral">
          <p>ii</p>
          <img src="${chord2}" alt="chord2">
        </div>
        <div class="numeral">
          <p>iii</p>
          <img src="${chord3}" alt="chord3">
        </div>
        <div class="numeral">
          <p>IV</p>
          <img src="${chord4}" alt="chord4">
        </div>
        <div class="numeral">
          <p>V</p>
          <img src="${chord5}" alt="chord5">
        </div>
        <div class="numeral">
          <p>vi</p>
          <img src="${chord6}" alt="chord6">
        </div>
        <div class="numeral">
          <p>vii°</p>
          <img src="${chord7}" alt="chord7">
        </div>

        <div class="button">
        <button name="progression-ideas" id="progression-button" onclick="toggle()">Get Progression Ideas!</button>
          <span class="hidden">
            <ul>
              <li>Pop: I – V – vi – IV</li>
              <li>Rock and Roll: I - IV - V</li>
              <li>50's: I - vi - IV - V</li>
              <li>Blues: I – I – I – I – IV – IV – I – I – V – IV – I – I</li>
              <li>Jazz: ii - V - I</li>
            </ul>

            <button name="progression-suggestion" id="suggestion-button" onclick="toggleSuggest()">Suggest A Progression!</button>
            <aside class="hidden">
            <form action="#" id="user-progression" method="POST" class="">
              <ul class="submit-form">
                <li>
                  <label for="">Suggest A Progression:</label>
                  <input type="text" id="suggest" name="suggest">
                </li>
              </ul>
            <input type="submit" name="" value="submit">
            </form>
            </aside>
          </span>
        </div>

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
