let barsController = document.querySelector(".bars-controller")
let linkContainer = document.querySelector(".link-container")

barsController.addEventListener("click",() => {
    linkContainer.classList.toggle("disabled")
})
linkContainer.addEventListener("click",()=> {
    linkContainer.classList.add("disabled")
})
