// $('.nar').click(function(){
//     $('.csdf .nar').toggleClass("change");
// });

const element=document.getElementsByClassName("nar")[0];
const element1=document.getElementsByClassName("ro")[0];
const element2=document.getElementsByClassName("vi")[0];
const element3=document.getElementsByClassName("he")[0];
const bg=document.getElementsByClassName("csdf")[0];

element.addEventListener("mouseover", ()=>{
    bg.style.backgroundColor="brown";
})
element.addEventListener("mouseout", ()=>{
    bg.style.backgroundColor="black";
})

element1.addEventListener("mouseover", ()=>{
    bg.style.backgroundColor="gray";
})
element1.addEventListener("mouseout", ()=>{
    bg.style.backgroundColor="black";
})

element2.addEventListener("mouseover", ()=>{
    bg.style.backgroundColor="pink";
})
element2.addEventListener("mouseout", ()=>{
    bg.style.backgroundColor="black";
})

element3.addEventListener("mouseover", ()=>{
    bg.style.backgroundColor="violet";
})
element3.addEventListener("mouseout", ()=>{
    bg.style.backgroundColor="black";
})

