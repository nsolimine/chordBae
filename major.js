(function startFetching() {
  const majAPI = "major.json";
  fetch(majAPI)
  .then(response => response.json())
  .then(filterChords)
  .catch(console.error)
})();

document.querySelector("#dropdown").addEventListener("change", function(event) {
  event.preventDefault();
  displayChords();
});

function setOccasionMajor(sel) {
  var majorSelected = sel.options[sel.selectedIndex].text;
}

function displayChords(key, chord1, chord2, chord3, chord4, chord5, chord6, chord7) {


  const chordDiv = document.querySelector("#chords")
  chordDiv.innerHTML = `
    <li>
      <p class="key">${key}</p>
      <div>
        <p>I</p>
        <img src="${chord1}" alt="chord1">
      </div>
      <div>
        <p>ii</p>
        <img src="${chord2}" alt="chord2">
      </div>
      <div>
        <p>iii</p>
        <img src="${chord3}" alt="chord3">
      </div>
      <div>
        <p>IV</p>
        <img src="${chord4}" alt="chord4">
      </div>
      <div>
        <p>V</p>
        <img src="${chord5}" alt="chord5">
      </div>
      <div>
        <p>vi</p>
        <img src="${chord6}" alt="chord6">
      </div>
      <div>
        <p>vii°</p>
        <img src="${chord7}" alt="chord7">
      </div>
    </li>
  `
  return chordDiv.innerHTML
};

function filterChords(chords) {
  var majorChords = chords
  for (var i = 0; i < majorChords.length; i++) {
    let key = majorChords[i]['id'];
    let chord1 = majorChords[i]['i'];
    let chord2 = majorChords[i]['ii'];
    let chord3 = majorChords[i]['iii'];
    let chord4 = majorChords[i]['iv'];
    let chord5 = majorChords[i]['v'];
    let chord6 = majorChords[i]['vi'];
    let chord7 = majorChords[i]['vii'];
    displayChords(key, chord1, chord2, chord3, chord4, chord5, chord6, chord7)
  }
};
