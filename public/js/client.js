$(document).ready(function(){
    
    $('#login_btn').click(function(){ //login 처리
        //if($('#login_btn').val()=='login'){
        const email=$('#login_email').val();
        const send_param={email};
        $.post('login',send_param,function(returnData){
            alert(returnData.message);
            location.reload();
            /*  alert(returnData.message)
            $('#login_btn').val('logout');
            $('#login_btn').css('color','blue');
            $('#login_email').hide(); */
       
            });
        });
        $('#logout_btn').click(function(){
            $.post('logout',{},function(returnData){
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
        $.post('contact',send_param,function(returnData){
            alert(returnData.message);
        });
    });
});