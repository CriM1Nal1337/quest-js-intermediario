const form = document.getElementById('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputs = document.querySelectorAll(".input")
    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            const errorMsg = input.nextElementSibling;
            errorMsg.classList.remove("hidden");
            input.classList.add("border-red")
        } else {
            const errorMsg = input.nextElementSibling;
            errorMsg.classList.add("hidden");
            input.classList.remove("border-red")
            input.classList.add("border-green")
        }
    })
})