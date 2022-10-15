const portfolio = document.querySelector(".sec-portfolio-js");
const imgModal = document.querySelector(".img-modal-js");


portfolio.addEventListener("click", (e) => {
    console.log(e.target.classList);
    if(e.target.classList.contains("btn-modal-js")){
        /*extrae src*/ 
        let urlImg = e.target.attributes[0].nodeValue;
        console.log(e.target.attributes[0].nodeValue);
        
        /*asigna la img al modal*/  
        imgModal.src = urlImg;
    }
}
);