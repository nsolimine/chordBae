var chordsMinor = [];

(function startFetchingMinor() {
  const minAPI = "minor.json";
  fetch(minAPI)
  .then(response => response.json())
  .then(dataMinor =>
    {chordsMinor = dataMinor
  })
  .catch(console.error)
})();

document.querySelector("#dropdown2").addEventListener("change", function(event) {
  event.preventDefault();
  var selectedKeyMinor = event.target.value
  filterChordsMinor(chordsMinor, selectedKeyMinor);
});

function toggleMinor() {
  document.querySelector("span").classList.toggle("hidden")
};

function toggleSuggestMinor() {
  document.querySelector("aside").classList.toggle("hidden")
};

function displayChordsMinor(key, chord1, chord2, chord3, chord4, chord5, chord6, chord7) {
  const chordDivMinor = document.querySelector("#chordsDiv")
  chordDivMinor.innerHTML = `
    <li class="display">
      <p class="key bg-danger">${key}</p>


      <div class="animated fadeIn">


        <div class="numeral">
          <p>i</p>
          <img src="${chord1}" alt="chord1">
        </div>
        <div class="numeral">
          <p>ii°</p>
          <img src="${chord2}" alt="chord2">
        </div>
        <div class="numeral">
          <p>III</p>
          <img src="${chord3}" alt="chord3">
        </div>
        <div class="numeral">
          <p>iv</p>
          <img src="${chord4}" alt="chord4">
        </div>
        <div class="numeral">
          <p>v</p>
          <img src="${chord5}" alt="chord5">
        </div>
        <div class="numeral">
          <p>VI</p>
          <img src="${chord6}" alt="chord6">
        </div>
        <div class="numeral">
          <p>VII</p>
          <img src="${chord7}" alt="chord7">
        </div>

        <div class="button">
        <button name="progression-ideas-minor" id="progression-button-minor" onclick="toggleMinor()">Get Progression Ideas!</button>
          <span class="hidden">
            <ul>
              <li>Ballad: i – VI – III – VII</li>
              <li>Rock and Roll: i - iv - v</li>
              <li>Classic Rock: i - VII - VI</li>
              <li>Blues: i – i – i – i – iv – iv – i – i – v – iv – i – i</li>
              <li>Jazz: i - VI - ii° - V</li>
            </ul>

            <button name="progression-suggestion-minor" id="suggestion-button-minor" onclick="toggleSuggestMinor()">Suggest A Progression!</button>
            <aside class="hidden">
            <form action="#" id="user-progression-minor" method="POST" class="">
              <ul class="submit-form-minor">
                <li>
                  <label for="">Suggest A Progression:</label>
                  <input type="text" id="suggest-minor" name="suggest-minor">
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
  return chordDivMinor.innerHTML
};

function filterChordsMinor(chordsMinor, id) {
  var minorChords = chordsMinor
  var filteredMinor = minorChords.filter((key, index) => {
  return key.id === id
  })
  for (var i = 0; i < filteredMinor.length; i++) {
    let key = filteredMinor[i]['id'];
    let chord1 = filteredMinor[i]['i'];
    let chord2 = filteredMinor[i]['ii'];
    let chord3 = filteredMinor[i]['iii'];
    let chord4 = filteredMinor[i]['iv'];
    let chord5 = filteredMinor[i]['v'];
    let chord6 = filteredMinor[i]['vi'];
    let chord7 = filteredMinor[i]['vii'];
    displayChordsMinor(key, chord1, chord2, chord3, chord4, chord5, chord6, chord7)
  }
};
