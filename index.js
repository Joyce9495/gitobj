/**
 * Created by rimi on 2016/10/24.
 */
var express=require('express');
var favicon=require('serve-favicon');

var path=require('path');

var app=express();
app.use(require('body-parser')());
app.set("port",process.env.PORT||3006); //端口号


// app.use(express.static(__dirname +'/public'));
// app.use(favicon(path.join(__dirname,'public','favicon.ico')));




app.get('/',function(req,res){
    res.type('text/html');
    res.write("urftgyhjkerty");
    res.end();
});

















app.use(function (req,res) {
    res.type('text/html');
    res.status(404);
    res.send("<span> 404</span>")

});
app.use(function (err,req,res,next) {
    console.error(err.stack);
    res.type("text/plain");
    res.status(500);
    res.send('500');


});

app.listen(app.get('port'),function(){
    console.log('express started on http://localhost:'+app.get('port')+ ';' +
        'press ctrl-c to terminate.');
});
