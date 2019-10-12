
$(function(){
    
    $('#searchbtn').click(function(){
        
        searchinput=$('#searchinput');
         term=searchinput.val();
        
    $.post('/user/search',{term:term},(data)=>{
        printingproducts(data);
    })
    })
    
    $.get('/user/getallproducts',(data)=>{
        printingproducts(data);
    })

    

})


function printingproducts(data){
    mydiv=$('#myproducts');
    mydiv.empty();
    for(let i=0;i<data.length;i++)
    {
        carddiv=$(`<div class="card"></div>`);
        image=$(`<img src="/uploads/${data[i].image}" alt="${data[i].name}" height="170px"   style="width:100% ">`);
        names=$(`<h1>${data[i].name}</h1>`);    
        price=$(`<p class="price">${data[i].price}</p>`)    
        description=$(`<p>${data[i].description}</p>`)    
          addtocart= $(`<button id="cart">add to cart</button>`);
            wishlist= $(`<button id="wish">wish list</button>`);
        para=$(`<p></p>`);
        para.append(addtocart,wishlist);
        carddiv.append(image,names,price,description,para);
        mydiv.append(carddiv);
    }
}



