const mysql=require('mysql');

const express=require('express');
const router=express.Router();

router.post('/',(req,res,next)=>{    
    ///////////////////////////////////
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "mysql",
        port:"3307",
        database:"nodejs"
      });    //연결 객체를 만듬
      
     
        console.log("Connected!");
        //회원가입처리
        const name=req.body.name;
        const email=req.body.email;
        const comments=req.body.comments;

        var sql = `INSERT INTO members (name,email,comments) VALUES ('${name}', '${email}', '${comments}')`;
        con.query(sql, function (err, result) {
          if (err){
            console.log("insert fail");
            res.json({message:"회원가입 실패"});
          }else{
            console.log("1 record inserted");
            res.json({message:"회원가입 되었습니다."});
          }
          
        }); //연결 객체를 연결
   
      ///////////////////////////////// 
    //members.push(req.body);
    //console.log(members); //회원가입에 들어가있는 멤버들을 볼수 있다
    
    //res.json({message:"ok"});   //응답을 받고 모듈을 방출해야함
});

module.exports=router; //변수,상수,함수 등을 방출 exports객체 이용할때는 함수 안됨