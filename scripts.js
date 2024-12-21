async function fetchData() {
    const apiSelector = document.getElementById('apiSelector');
    const output = document.getElementById('output');

    const apiUrl = apiSelector.value;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
        }

        const data = await response.json();
        output.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
    }
}
