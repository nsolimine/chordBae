(function startFetching() {
  const minAPI = "minor.json";
  fetch(minAPI)
  .then(response => response.json())
  .then(filterChords)
  .catch(console.error)
})();

document.querySelector("#dropdown2").addEventListener("change", function(event) {
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
        <p>i</p>
        <img src="${chord1}" alt="chord1">
      </div>
      <div>
        <p>ii°</p>
        <img src="${chord2}" alt="chord2">
      </div>
      <div>
        <p>III</p>
        <img src="${chord3}" alt="chord3">
      </div>
      <div>
        <p>iv</p>
        <img src="${chord4}" alt="chord4">
      </div>
      <div>
        <p>v</p>
        <img src="${chord5}" alt="chord5">
      </div>
      <div>
        <p>VI</p>
        <img src="${chord6}" alt="chord6">
      </div>
      <div>
        <p>VII</p>
        <img src="${chord7}" alt="chord7">
      </div>
    </li>
  `
  return chordDiv.innerHTML
};

function filterChords(chords) {
  var minorChords = chords
  for (var i = 0; i < minorChords.length; i++) {
    let key = minorChords[i]['id'];
    let chord1 = minorChords[i]['i'];
    let chord2 = minorChords[i]['ii'];
    let chord3 = minorChords[i]['iii'];
    let chord4 = minorChords[i]['iv'];
    let chord5 = minorChords[i]['v'];
    let chord6 = minorChords[i]['vi'];
    let chord7 = minorChords[i]['vii'];
    displayChords(key, chord1, chord2, chord3, chord4, chord5, chord6, chord7)
  }
};
