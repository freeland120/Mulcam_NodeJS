$(document).ready(function(){
   
    $('#board_read_text').click(function(){
        window.open("board/read_form", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=500,width=900,height=500");
    });


    $('#board_write_btn').click(function(){
        const board_title=$('#board_title').val();
        const board_content=$('#board_content').val();

        const send_param={board_title,board_content};
        //alert(board_title+":"+board_content);
        $.post('/board/write',send_param,(returnData)=>{
            alert(returnData.message);
        });
    });

    $('#board_write_text').click(function(){
        window.open("board/write_form", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=500,width=700,height=500");
    });


    $('#basket_btn').click(function(){
        const quantity=$('#quantity').val();
        const product=$('#product').val();

        const send_param={product,quantity};
        $.post('/basket',send_param,function(returnData){
            console.log(returnData);
            alert(returnData.message);
        }); //서버쪽으로 포스트 요청이 되도록 할 것임
    });


    $('#login_btn').click(function(){ //login 처리
        //if($('#login_btn').val()=='login'){
        const email=$('#login_email').val();
        const send_param={email};
        $.post('/login',send_param,function(returnData){
            alert(returnData.message);
            location.reload();
            /*  alert(returnData.message)
            $('#login_btn').val('logout');
            $('#login_btn').css('color','blue');
            $('#login_email').hide(); */
       
            });
        });
        $('#logout_btn').click(function(){
            $.post('/logout',{},function(returnData){
                alert(returnData.message);
                location.reload(); //이 페이지 갱신!
            });
        });
       
   
    
        
    $('#contact_btn').click(function(){
        //alert('안녕하세요?');
        const name=$('#name').val();
        const email=$('#email').val();
        const comments=$('#comments').val();
        //alert(name+":"+email+":"+comments);
        const send_param={name, email, comments}; //비구조화 할당 문법 
        $.post('/contact',send_param,function(returnData){
            alert(returnData.message);
        });
    });
});