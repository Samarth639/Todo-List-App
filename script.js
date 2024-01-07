

let form = document.getElementById("addForm")
// console.log(form)
let ul = document.getElementById("items")
form.addEventListener("submit" , function(e){
    e.preventDefault()
    let item = document.getElementById("item").value
   let li =  document.createElement("li")
    li.innerText = item
    li.className="list-group-item"
    let btn = document.createElement("button")
    btn.innerText="X"
    btn.className="btn btn-danger btn-sm float-right delete"
    ul.appendChild(li)
    li.appendChild(btn)
    console.log(li)
})

ul.addEventListener("click" , function(e){
    if(e.target.classList.contains("delete"))
    if(confirm("Are you sure"))
    ul.removeChild(e.target.parentElement)
})



let filter = document.querySelector("#filter")
console.log(filter)

filter.addEventListener("input" , function(e){
    let liElements = document.getElementsByTagName("li")
  Array.from(liElements).forEach((item)=>{
    if(item.firstChild.textContent.toLowerCase().indexOf(e.target.value)!=-1){
        item.style.display="block"
    }else{
        item.style.display="none"
    }
  })

  

})