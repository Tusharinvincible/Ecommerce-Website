//alert("Hi I m working");
const productImages=document.querySelectorAll(".product-images img");

const productImageSlider=document.querySelector(".image-slider");
let activeImageSlide=0;

productImages.forEach((item,i)=>{
  //  console.log("I the item ",i);
  //  console.log(item);
    item.addEventListener('click',()=>{
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlider.style.backgroundImage=`url('${item.src}')`;
        activeImageSlide=i;
    })
})


// Size Button

const sizeBtn=document.querySelectorAll(".size-radio-btn");

let activeSize=0;

sizeBtn.forEach((item,i)=>{
    console.log(item);
    item.addEventListener('click',()=>{
        // productImageSlider.style.width+="{5*i}px";
        // productImageSlider.style.height+="{5*i}px";
      //  let newHeight=500+10*i;
      //  let newWidth=500+10*i;
        sizeBtn[activeSize].classList.remove('check');
       // productImageSlider.style.height=newHeight+'px';
       // productImageSlider.style.width=newWidth+'px';
       item.classList.add('check');
       activeSize=i;

        //alert("click");


    })
})
