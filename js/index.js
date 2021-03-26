
const clickBalls = document.getElementsByClassName("photo-selection")


function clickPhoto(number){
    const photo = document.getElementById("photo")
    const selected = document.getElementById("selected")
    switch(number){
        case 1:
            selected.removeAttribute("id","selected")
            clickBalls[0].setAttribute("id","selected")
            photo.setAttribute("src","../assets/fone2.png")
        break;
        case 2:
            selected.removeAttribute("id","selected")
            clickBalls[1].setAttribute("id","selected")
            photo.setAttribute("src","../assets/fone1.png")
        break;
        case 3:
            selected.removeAttribute("id","selected")
            clickBalls[2].setAttribute("id","selected")
            photo.setAttribute("src","../assets/fone3.png")
        break;
    }
}