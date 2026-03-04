export async function buttons() {
    // Address of the Google Apps Script web app that will handle the form submissions
    const formUrl = "https://script.google.com/macros/s/AKfycby8VFoblNNsBlkHWTjAvXeiCMb8So6A_BiwL4vaU8WciEd2Mt4QCIuJwIwuqTRbOdi9Kw/exec?page=";  
    const tests = await fetch("/tests").then(res => res.json()); // Fetch test names from the server and parse as JSON
    for (let i = 0; i < tests.length; i++) {
        document.getElementById(tests[i]).addEventListener('click', async () => {
            window.location.href = formUrl + tests[i]; // Redirect to a new page based on the button clicked
        });
    }
}