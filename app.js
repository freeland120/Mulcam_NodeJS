const indexRouter=require('./routes/index');
const logoutRouter=require('./routes/logout');
const loginRouter=require('./routes/login');
const contactRouter=require('./routes/contact');
const express=require('express');
const path=require('path');
const app=express();
const session=require('express-session');


app.set('view engine','ejs'); //set 설정은 use보다 위에 하는게 좋다.
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));  //true값을 하면 배열같은것도 파싱이 가능해짐

app.use(session({
    resave:false,
    saveUninitialized:true,
    secret:'미녀 강사 전은수',
    cookie:{
        httpOnly:true,
        secure:false
    }
}));


app.use('/',indexRouter);
app.use('/logout',logoutRouter);
app.use('/login',loginRouter);
app.use('/contact',contactRouter);


app.listen(3000,()=>{
    console.log('Server ready...');
});