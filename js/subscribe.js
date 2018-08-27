
function subscribe(formElement) {

    let name = formElement.querySelector("[name='name']").value
    let address = formElement.querySelector("[name='address']").value

    const endpoint = `https://tranquil-tor-30132.herokuapp.com/subscribe/?name=${name}&address=${address}`;

    let lookupOptions = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        }
    }

    fetch(endpoint, lookupOptions)
    .then(response => {
        return response.json();
    }).then(responseData => {
        if(responseData['success'] === 'true') {
            document.querySelectorAll(".subscribe-prompt").forEach(e => e.innerHTML = 'Thanks for subscribing!')
        } else {
            console.log(responseData)
            throw("oops");
        }
    }).catch(error => {
        document.querySelectorAll(".subscribe-prompt").forEach(e => e.innerHTML = 'There was an issue with subscribing :( Please try reloading the page, or contact the admin')
        console.log("error", error)
    })
    document.querySelectorAll(".subscribe-form").forEach(e => e.style = 'display: none');
}