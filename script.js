fetch('tickers.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('tickerDisplay').innerHTML = data.map(ticker => 
            `<li><a href="/Test-View/stats/${ticker}.html">${ticker}</a></li>`
        ).join('');
    })
    .catch(error => console.error("Fetch Error:", error));  // Notice the dot before `catch`
