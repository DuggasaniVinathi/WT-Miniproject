const product=[
    {
        id:0,
        image:'https://t4.ftcdn.net/jpg/05/57/29/25/360_F_557292539_2kXYz0frOcCGISoYEd2MNTmxyT0lYyOj.webp',
        title:'Reddish Flowers',
        price:570,
    },
    {
        id:1,
        image:'https://t3.ftcdn.net/jpg/05/71/07/58/240_F_571075880_NTWRQfNwQDa0NLnWH44TLPXKil3pKqJl.jpg',
        title:'Mixedcolor Flowers',
        price:400,
    },
    {
        id:3,
        image:'https://t3.ftcdn.net/jpg/01/59/16/48/240_F_159164847_o5hvAHo8GeQ9CsTDMQAfKgjEgPJ4W1pB.jpg',
        title:'Purple Flowers',
        price:300,
    },
    {
        id:4,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP832D9lthEdoAjUHjNSYH62dMN7Dhz82tWg&usqp=CAU',
        title:'Yellowish Flowers',
        price:400,
    },
    {
        id:5,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfeymviZ373tt7feCFMcy1828skJFYKWi1oQ&usqp=CAU',
        title:'Pure White Flowers',
        price:350,
    },
    {
        id:6,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ci04JDq4t2YBxLJqMuBFalZvm23Tsv423w&usqp=CAU',
        title:'Purple White Flowers',
        price:270,
    },
    {
        id:7,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8edDigyYabOIqYPaHqDwkRFfVZhMjrW7ew&usqp=CAU',
        title:'Lightred Flowers',
        price:390,
    },
    {
        id:8,
        image:'flower6.webp',
        title:'Yellow White Flowers',
        price:360,
    },
];
const categories=[...new Set(product.map((item)=>{return item}))]
let i=0;
document.getElementById('root').innerHTML=categories.map((item)=>
{
    var {image,title,price}=item;
    return(
        `<div class='box'>
        <div class='img-box'>
           <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>RS ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+`</div>
        </div>`
    )
}).join('')
var cart=[];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}
function displaycart(a){
    let j=0,total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML="Your cart is empty";
        document.getElementById("total").innerHTML="$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML=cart.map((items)=>
        {
            var {image,title,price}=items;
            total=total+price;
            document.getElementById("total").innerHTML="$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img>
                <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
            );
        }).join('');
    }
}