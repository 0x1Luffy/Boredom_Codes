
   let cartQuantity = 0;
   let addToCartVal = 0;
   let doubleCartVal = 0;
   let tripleCartVal = 0;
   let resetCartVal = 0;


function startCartQuantity() {
   console.log(cartQuantity);

}
function addToCart() {
    if(addToCartVal>=0){
        newCart = addToCartVal++;
        console.log("sucessfully added", +newCart, "item into the cart");
    }
}
function doubleCart() {
        doubleCartVal++;
        console.log(doubleCartVal++, "Items added into the cart");
     }

function tripleCart() {
    let tCart = tripleCartVal + 3;
    console.log(tCart, "Items Added Into The Cart");
}
function resetCart() {
    console.log(cartQuantity, "Items Are There In Cart Now");
}