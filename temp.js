var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  port:"3307",
  database:"nodejs"
  
});

con.connect((err)=>{
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO members (name,email,comments) VALUES ('전은수', 'freeland120@naver.com', 'aaa')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    }); //연결 객체를 연결
});