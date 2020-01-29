const express=require('express');
const router=express.Router();

router.post('/',(req,res,next)=>{      
    req.session.destroy(()=>{
        res.json({message:"logout 되었습니다."});   //응답을 받고 모듈을 방출해야함
    });
    
    
});

module.exports=router; //변수,상수,함수 등을 방출 exports객체 이용할때는 함수 안됨