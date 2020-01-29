const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{    //url에 요청하는 것은 GET방식이기 때문에 post방식에서 바꿔준다.
    let logined=0;
    if(req.session.email){
        logined=1;
    }     
   // res.render('index',{title:"MyShop2"});
    res.render('index',{flag:logined,name:req.session.name}); //스트링으로 바꿔서 처리? 굳이 안해도 됨 하고 싶으면 logined+""
    
});

module.exports=router; //변수,상수,함수 등을 방출 exports객체 이용할때는 함수 안됨