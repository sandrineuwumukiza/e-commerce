

   var x= document.getElementById("image1");
   function stayImage(){
    x.style.opacity ="0.4"
    x.style.border = "5px"
    x.style.borderColor ="red"
   }
   function changeImage(){
    x.style.opacity = "1"
}
x.addEventListener('mouseover',() =>
{
    changeImage();
    
});
x.addEventListener('mouseout', () => {
    stayImage();
})
var y= document.getElementById("image2");
var m =document.getElementById("image")
   function stayImage1(){
    y.style.opacity ="0.4"
    y.style.border = "5px"
    y.style.borderColor ="red"
   }
   function changeImage1(){
    y.style.opacity = "1";
    m.src = y.src
}
y.addEventListener('mouseover',() =>
{
    stayImage1();
});
y.addEventListener('mouseout', () => {
    changeImage1();
})
var z= document.getElementById("image3");
   function stayImage2(){
    z.style.opacity ="0.4"
    z.style.border = "5px"
    z.style.borderColor ="red"
   }
   function changeImage2(){
    z.style.opacity = "1"
}
z.addEventListener('mouseover',() =>
{
    stayImage2();
});
z.addEventListener('mouseout', () => {
    changeImage2();
})
var t= document.getElementById("image4");
   function stayImage3(){
    t.style.opacity ="0.4"
    t.style.border = "5px"
    t.style.borderColor ="red"
   }
   function changeImage3(){
    t.style.opacity = "1"
}
t.addEventListener('mouseover',() =>
{
    stayImage3();
});
t.addEventListener('mouseout', () => {
    changeImage3();
});
function  navBar(){
    document.getElementById("close").style.display ='flex'
}
function nav(){
    document.getElementById("navbar").style.display = "block"
    document.getElementById("close").style.display ="block"
}
function closeNav(){
    document.getElementById("navbar").style.display ='none'
}
// const images = document.querySelector("#images")
// const image = document.getElementById("bigImage")
// document.querySelectorAll("#images").forEach(n => n.addEventListener("click",() => {
//     images.src = bigImage.src
// }))
// function image(){
//     document.getElementById("smallImage1")
// }
// const smallPicture = document.querySelectorAll('images');
// // const bigPicture = document.querySelector('.content1');
// smallPicture.forEach(smallPicture =>{
//     smallPicture.addEventListener('click',()=>{
//         bigPicture.src = smallPicture.src
// })
// })