let carrouselImg =Array.from(document.querySelectorAll(".carrousel-img img"))
let prevBtn = document.querySelector("#prev")
let nextBtn = document.querySelector("#next")

let carruntIndex = 0

nextBtn.onclick = nextSlide
prevBtn.onclick = prevSlide

function showSlide (index) {
    carrouselImg.forEach(img => {

        img.classList.remove("active")

    })

    carrouselImg[index].classList.add("active")
}

function nextSlide() {
    carruntIndex--
    if(carruntIndex < 0){
        carruntIndex = carrouselImg.length -1
    }
    showSlide(carruntIndex)
    
}

