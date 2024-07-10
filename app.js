let wrapper = document.querySelector(".sliderwrapper");
let menuitem = document.querySelectorAll(".menu");
const products = [{id:1,
    title:"Air force",
    price:10999,
    colors:[{
        code:"black",
        img:"/air.png",

    },{
        code:"white",
        img:"/white.png"
    },],
    
},{
    id:2,
    title:"jordan",
    price:20999,
    colors:[{
        code:"lightgrey",
        img:"/jordan.png",

    },{
        code:"green",
        img:"/jordan2.png"
    },], 
},{
    id:3,
    title:"Blazer",
    price:25000,
    colors:[{
        code:"white",
        img:"/blazer.png",

    },{
        code:"green",
        img:"/blazer2.png"
    },],
},{
    id:4,
    title:"crater",
    price:10999,
    colors:[{
        code:"black",
        img:"/crater.png",

    },{
        code:"white",
        img:"/crater2.png"
    },],
},{
   
    id:4,
    title:"heppie",
    price:10999,
    colors:[{
        code:"gray",
        img:"/hippie.png",

    },{
        code:"black",
        img:"/hippie2.png"
    },],
},];

let chosenproduct = products[0] 
const currentproductimg = document.querySelector(".productimg");
const currentproducttitle = document.querySelector(".producttitle");
const currentproductprice = document.querySelector(".productprice");
const currentproductcolor = document.querySelectorAll(".color");
const currentproductsizes = document.querySelectorAll(".size");



menuitem.forEach((item,index)=>{

    item.addEventListener("click",()=>{
        wrapper.style.transform =`translateX(${-100*index}vw)`;
        chosenproduct = products[index];

        currentproducttitle.textContent=chosenproduct.title;
        currentproductprice.textContent=chosenproduct.price;
        currentproductimg.src=chosenproduct.colors[0].img;

        currentproductcolor.forEach((color,index)=>{
            color.style.backgroundColor = chosenproduct.colors[index].code;

        })

    });
});
currentproductcolor.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentproductimg.src=chosenproduct.colors[index].img;
    });
});

currentproductsizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentproductsizes.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        });
        size.style.backgroundColor="black";
        size.style.color="white";
        
    });
   

});
let productbtn = document.querySelector(".productbtn");
let payment = document.querySelector(".payment");
let close = document.querySelector(".close");

productbtn.addEventListener("click",()=>{
    payment.style.display="flex"
})
  
close.addEventListener("click",()=>{
    payment.style.display="none"
})
  