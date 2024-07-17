let scrollContainer = document.querySelector(".gallery-container");
let backBtn = document.querySelector("#backbtn");
let nextBtn = document.querySelector("#nextbtn");
let ChangeNum = document.querySelector("#ChangeScrollNumber");


nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 1100;
    if(scrollContainer.scrollLeft === 0){
        ChangeNum.innerText = "2/3"
    }else if (scrollContainer.scrollLeft === 1100) {
        ChangeNum.innerText = "3/3"
    }
    console.log("Next Btn:- ", scrollContainer.scrollLeft)
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 1100;
    if(scrollContainer.scrollLeft === 2192){
        ChangeNum.innerText = "2/3"
    }else if (scrollContainer.scrollLeft === 1092) {
        ChangeNum.innerText = "1/3"
    }
    console.log("back Btn:- ", scrollContainer.scrollLeft)
});



let scrollContainer2 = document.querySelector(".six-main-content");
let backBtn2 = document.querySelector("#backbtn2");
let nextBtn2 = document.querySelector("#nextbtn2");

nextBtn2.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft += 290;
    if(scrollContainer2.scrollLeft >= 290){
        nextBtn2.style.borderColor = "rgb(224, 224, 224)"
        nextBtn2.style.color = "#97b1ff"
        nextBtn2.style.cursor = "default"
        nextBtn2.classList.remove("active");
    }else {
        backBtn2.style.borderColor = "rgb(179, 179, 179)"
        backBtn2.style.cursor = "pointer"
        backBtn2.classList.add("active");
        backBtn2.style.color = "#0040ff"
    }
});

backBtn2.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft -= 290;
    if(scrollContainer2.scrollLeft <= 198){
        backBtn2.style.borderColor = "rgb(224, 224, 224)"
        backBtn2.style.cursor = "default"
        backBtn2.style.color = "#97b1ff"
        backBtn2.classList.remove("active");
    }else {
        nextBtn2.style.borderColor = "rgb(179, 179, 179)"
        nextBtn2.style.cursor = "pointer"
        nextBtn2.style.color = "#0040ff"
        backBtn2.classList.add("active");
    }
});


let scrollContainer3 = document.querySelector(".seven-main-content");
let backBtn3 = document.querySelector("#backbtn3");
let nextBtn3 = document.querySelector("#nextbtn3");

nextBtn3.addEventListener("click", () => {
    scrollContainer3.style.scrollBehavior = "smooth";
    scrollContainer3.scrollLeft += 290;
    if(scrollContainer3.scrollLeft >= 290){
        nextBtn3.style.borderColor = "rgb(224, 224, 224)"
        nextBtn3.style.color = "#97b1ff"
        nextBtn3.style.cursor = "default"
        nextBtn3.classList.add("active");
    }else {
        backBtn3.style.borderColor = "rgb(179, 179, 179)"
        backBtn3.style.cursor = "pointer"
        backBtn3.classList.add("active");
        backBtn3.style.color = "#0040ff"
    }
});

backBtn3.addEventListener("click", () => {
    scrollContainer3.style.scrollBehavior = "smooth";
    scrollContainer3.scrollLeft -= 290;
    if(scrollContainer3.scrollLeft <= 183){
        backBtn3.style.borderColor = "rgb(224, 224, 224)"
        backBtn3.style.cursor = "default"
        backBtn3.style.color = "#97b1ff"
        backBtn3.classList.add("active");
    }else {
        nextBtn3.style.borderColor = "rgb(179, 179, 179)"
        nextBtn3.style.cursor = "pointer"
        nextBtn3.style.color = "#0040ff"
        backBtn3.classList.remove("active");
    }
});