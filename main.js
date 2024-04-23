let bars = document.querySelector("#bar");
let ul = document.querySelector("ul");

bars.addEventListener("click",()=>{
    ul.classList.toggle("showData");
    // console.log(ul);
    if(ul.className == "showData"){
        document.getElementById("bar").className="fa-solid fa-xmark";
    }
    else{
        document.getElementById("bar").className="fa-solid fa-bars";
    }
    
});

// main page

let cvBtn = document.getElementById("cvBtn");

cvBtn.addEventListener("click",()=>{
    alert("Download Successfully");
});


// contact
let submit = document.getElementById("submit");

submit.addEventListener("click",()=>{
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    if(email.value=="" && pass.value==""){
        alert("Fill Your From")
    }
    else{
        alert("Thanks")
    }
})