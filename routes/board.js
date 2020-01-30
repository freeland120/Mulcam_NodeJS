const con=require('./mysql_con');
const express=require('express');
const router=express.Router();

router.get('/read_form',(req,res,next)=>{      
    con.query(`SELECT * FROM board order by bo_no desc`,
    (err,result)=>{
        if(err) console.log(err);
        console.log(result.length);
        res.render('board_read_form',{title:"글읽기 화면",result});
               
    });
      
});


router.post('/write',(req,res)=>{
    if(req.session.email){ //글쓰기 처리        
            const sql=`INSERT INTO board (m_no,name,title,content) VALUES ('${req.session.m_no}','${req.session.name}', '${req.body.board_title}', '${req.body.board_content}')`;
            con.query(sql,(err,result)=>{
                if(err){
                    console.error(err);
                    res.json({message:"글 등록 실패"});
                }else{
                    console.log('board insert OK!');
                    res.json({message:"글 등록 성공"});
                }
            });
       

    }else{
        res.json({message:"로그인 부터 하세요"});
    }
});

router.get('/write_form',(req,res,next)=>{      
   
    res.render('board_write_form',{title:"글쓰기 화면"});
    
});

module.exports=router; //변수,상수,함수 등을 방출 exports객체 이용할때는 함수 안됨