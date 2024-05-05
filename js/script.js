
var iconMn = document.querySelector(".icon__mn");
var iconMNSpan1 = document.querySelector(".icon__mn__span1");
var iconMNSpan2 = document.querySelector(".icon__mn__span2");
var SecMn = document.querySelector(".sec__mn");



window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;

    if(scroll > 70){
        iconMn.classList.add("scrollIconMn");
    }
    else if(scroll < 70){
        iconMn.classList.remove("scrollIconMn");
    }
}

iconMn.addEventListener("click", () => {
    SecMn.classList.toggle("activeSecMn");
    iconMNSpan1.classList.toggle("activeIconMnSpan1");
    iconMNSpan2.classList.toggle("activeIconMnSpan2");
})

