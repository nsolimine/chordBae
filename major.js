var chords = [];

(function startFetching() {
  const majAPI = "major.json";
  fetch(majAPI)
  .then(response => response.json())
  .then(data => chords = data)
  .catch(console.error)
})();

document.querySelector("#dropdown").addEventListener("change", function(event) {
  event.preventDefault();
  var selectedKey = event.target.value
  filterChords(chords, selectedKey);
});

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
