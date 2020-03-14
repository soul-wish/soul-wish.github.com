(async function boot() {
  const [confirmedNode, recoveredNode, deathsNode] = document.querySelectorAll('.amount');

  function printData(confirmed = 'error...', recovered = 'error...', deaths = 'error...') {
    confirmedNode.innerHTML = confirmed;
    recoveredNode.innerHTML = recovered;
    deathsNode.innerHTML = deaths;
  }

  function fetchData() {
    return fetch('https://covid19.mathdro.id/api/countries/Ukraine')
      .then(response => response.json())
      .catch(() => printData());
  }

  let data = null;
  const cache = JSON.parse(localStorage.getItem('cache'));
  if (cache && Date.now() - cache.timeUpdated < 600000) {
    data = cache;
  } else {
    data = await fetchData();
    data.timeUpdated = Date.now();
    localStorage.setItem('cache', JSON.stringify(data));
  }
  const {
    confirmed: { value: confirmed },
    recovered: { value: recovered },
    deaths: { value: deaths }
  } = data;
  printData(confirmed, recovered, deaths);
})();
