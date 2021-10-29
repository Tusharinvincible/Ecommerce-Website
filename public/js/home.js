//alert("I m Working:  ");

const productContainers=[...document.querySelectorAll(".product-container")];
const nxtBtn=[...document.querySelectorAll(".nxt-btn")];

const preBtn=[...document.querySelectorAll(".pre-btn")];
productContainers.forEach((item,i)=>{
    // ct++;
    // console.log("I is ::  ",ct);
    // console.log(item);
    let containerDimensions=item.getBoundingClientRect();
    // console.log("   Dimensions:  ",containerDimensions);
    let containerWidth=containerDimensions.width;
   // console.log("Nxt btn: ",nxtBtn[i]);
    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft+=containerWidth;
    })

    preBtn[i].addEventListener('click',()=>{
        item.scrollLeft-=containerWidth;
        console.log(item.scrollLeft);
    })

    

})