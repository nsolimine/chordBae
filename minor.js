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

function displayChordsMinor(key, chord1, chord2, chord3, chord4, chord5, chord6, chord7) {
  const chordDivMinor = document.querySelector("#chordsDiv")
  chordDivMinor.innerHTML = `
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
