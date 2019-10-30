$(function(){

    $('.home').click(function(e){
        console.log($(this).parent()[0].children[0].childNodes[0]);
        //console.log($(this).parent());
        var theid=$(this).parent()[0].children[0].childNodes[0];
        // $.get('/user/singleproduct?id=1',function(data){
        //     console.log('yeah'+ data.name)
        // })

        $.ajax({
            url: "/user/singleproduct",
            type:'get',
            data: {"id":"1"},
            dataType: 'json',

            success: function(response) {
                //Do Something
                console.log(response.name)
            },
            error: function(xhr) {
                //Do Something to handle error
            }
        });
    })

})