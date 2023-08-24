// DOM elements
const input = document.getElementById('input-box')
const button = document.querySelector('button')
const listContainer  = document.getElementById('list-container')

// Adding an EventListener to Button
button.addEventListener('click',function(){
    if(input.value == ""){
        alert("Please write something")
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = input.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    input.value = "";
    saveData()
})
// Adding an EventListener to ListContainer (Ul)
listContainer.addEventListener('click',function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false)

// functions for saving and retriving the value from local storage
function saveData(){
    localStorage.setItem("value",listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("value")
}
showData()