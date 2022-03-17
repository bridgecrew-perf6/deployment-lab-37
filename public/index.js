let subBtn = document.querySelector(`button`); 

console.log("Locked N loaded")


function submitName(event) {
    let nameInput = document.querySelector(`input`)
    axios
    .post(`/names`, {name: nameInput.value})
        .then(res => { 
            nameInput.value = ""; 
        })
}


subBtn.addEventListener("click", submitName)