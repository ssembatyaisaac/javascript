var express=require('express');
var bodyParser=require('body-parser');
// For Image
var multer  = require('multer');
var upload = multer({dest: './public/uploads/'})
var fs=require('fs');
var path=require('path');

var app=express();
// Images View Start

// Show Image
app.get('/show-image/:img_url',function(req,res){
    res.render('image',{'imgUrl':req.params.img_url});
});

// Show Image Form
app.get('/',function(req,res){
    res.render('add-image');
});

// Images View Start
// Add Image
app.post('/add-image',upload.single('image'),function(req,res){
    // Save Image
    console.log(req.file)
    console.log(req.body)
    var possible='abcdefghijklmnopqrstuvwxyz123456789';
    var imgUrl='';
    for(var i=0; i<6; i++){
        imgUrl+=possible.charAt(Math.floor(Math.random()*possible.length));
    }
    var tempPath=req.file.path;
    var ext=path.extname(req.file.originalname).toLowerCase();
  //   Create Upload Folder in Public Folder
    var targetPath=path.resolve('./public/uploads/'+imgUrl+ext);
    if(ext==='.png' || ext==='.jpg' || ext==='.jpeg' || ext==='.gif'){
      fs.rename(tempPath,targetPath,function(err){
          if(err) throw err;
          res.redirect('/show-image/'+imgUrl+ext);
      });
    }else{
        fs.unlink(tempPath,function(){
            if(err) throw err;
            res.json(500,{error:'Only image files are allowed'});
        });
    }
  // Save Image End
});
// Images View End

// Set the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Set Public Folder as static Path
app.use(express.static(path.join(__dirname, 'public')));

// Run the Server
app.listen('3000',function(){
    console.log('Server is running at PORT '+3000);
});