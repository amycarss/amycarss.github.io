const scriptURL = "https://script.google.com/macros/s/AKfycbw-x2gHmWccuxvivJPRKap6N25vPFTWvgjDiOzvWwXPHvZ6-Gc/exec"
const form = document.forms["in_tension_survey"]

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response),
    document.getElementById("submission_lock").style.display = "block")
    .then(() => window.location.replace("success_page.html"))
    .catch(error => console.error('Error!', error.message))
});