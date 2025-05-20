fetch('tickers.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Ticker Data:", data); // Log the JSON data in Developer Console
        document.getElementById('tickerDisplay').innerHTML = data.join(', '); // Display tickers
    })
    .catch(error => console.error("Fetch Error:", error));

