const con=require('./mysql_con');
const mysql=require('mysql');
const express=require('express');
const router=express.Router();

router.post('/',(req,res,next)=>{    
    ///////////////////////////////////
      
      //con.connect((err)=>{
        ////if (err) throw err;
        console.log("DB Connected!");
        //basket insert처리
        //const email=req.session.email //누가? 이메일이 있으면 //basket insert처리 없으면 login 권고
        if(req.session.email){
          
          const product=req.body.product;
          const quantity=req.body.quantity;
         // const name =result[0].name;
         // req.session.name=name;
          var sql = `INSERT INTO basket (m_no,product,quantity) VALUES (${req.session.m_no}, '${req.body.product}', ${req.body.quantity})`; //DB에서는 텍스트일때만 싱글 따옴표를 붙여주고 숫자일때는 때준다.
          
          con.query(sql, function (err, result) {
            if (err){
              console.log("Basket insert fail");
              res.json({message:"장바구니 쿼리 실패"});
            }else{
              console.log("1 record inserted");
              res.json({message:`${req.session.name}님 장바구니에 들어감 ㅡㅡ`});
            }
            
          }); //연결 객체를 연결


        }else{//login 권고
          res.json({message:"로그인부터 하세요!"});
        }
            
   // }); //end connect

      ///////////////////////////////// 
    //members.push(req.body);
    //console.log(members); //회원가입에 들어가있는 멤버들을 볼수 있다
    
    //res.json({message:"ok"});   //응답을 받고 모듈을 방출해야함
}); //end post

module.exports=router; //변수,상수,함수 등을 방출 exports객체 이용할때는 함수 안됨