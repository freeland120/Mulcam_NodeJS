const mysql=require('mysql');
const members=require('./members');
const express=require('express');
const router=express.Router();

router.post('/',(req,res,next)=>{      
    
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "mysql",
        database: "nodejs",
        port:"3307"
      });
      
      /* con.connect((err)=>{
          if(err) throw err;
          const email=req.body.email;
          con.query(`SELECT * FROM members WHERE email='${email}'`,(err,result)=>{
              if(err){
                  console.log(err);
                  res.json({message:"다시 로그인 해주세요!"});
              }else{
                  const name =result[0].name;
                  req.session.email=email;
                  req.session.name=name;
                  res.json({message:`${name}님 OK!🏓`});
              }
          });
      }); */

      
      
       con.connect((err)=>{
        if (err) throw err;
        let sql=`SELECT * FROM members WHERE email='${req.body.email}'`;
        con.query(sql, function (err, result, fields) {
            let message;
          if (err) throw err;

          if(result.length>0){
            const name =result[0].name;
              req.session.email=req.body.email;
              req.session.name=name;
              message=`${name}님 OK!🏓`;
          }else{
              message=`Login Fail`;
          }

          res.json({message});

          
        });
      }); 


/* con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT  name, email, comments FROM members", function (err, result, fields) {
          if (err) throw err;
          let message;
          for(let i=0;i<result.length;i++){
            if(result[i].email==req.body.email){
                req.session.email=req.body.email;
                message="login Ok!";
                break;
            }
        }
        if(!message){
            message="login Fail~";
        }
        res.json({message});
        });
      }); */



    /* let message;
    for(let i=0;i<members.length;i++){
        if(members[i].email==req.body.email){
            req.session.email=req.body.email;
            message="login Ok!";
            break;
        }
    }
    if(!message){
        message="login Fail~";
    } */
    //members.push(req.body);
    //console.log(members); //회원가입에 들어가있는 멤버들을 볼수 있다
    
    //res.json({message});   //응답을 받고 모듈을 방출해야함

});

module.exports=router; //변수,상수,함수 등을 방출 exports객체 이용할때는 함수 안됨