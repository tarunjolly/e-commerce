$(function(){
    $.get('/vendor/getallproducts',(data)=>{
        printingdetails(data);
    })
    $('#sel').change(function(e){
       // let r=$('#sel').val();
       console.log($(this));
        console.log($(this).children("option:selected").val());
        console.log(r);
        $.get('/vendor/getstock',(data)=>{
            printstock(data);
        })
    })
    
  });

function printingdetails(data){
    products=$('#products')
    sel=$(`<select ${name="list"} ${id="sel"}></select>`)
    for(let i=0;i<data.length;i++){
        sel.append(`<option value="${data[i].name}">${data[i].name}</option>`)


    }
    products.append(sel);

}


function printstock(data)
{
    num=$('#num');
    num.val(data.stock);
}

