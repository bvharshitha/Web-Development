//jshint eversion:6
 const express=require("express");
 const ejs = require("ejs");
 const app=express();
 const bodyPrarser=require("body-parser");
 const _=require("lodash");
 const mongoose=require("mongoose");

 const home= "Most movies are made so they can be watched at home or on a movie screen at movie theaters. Movies are shown in movie theaters a few weeks or months after or before the movie is released. Movies can be marketed using media. Movies are shown on pay television or cable television, or are sold or rented on DVD disks or videocassette tapes, so that people can watch the movies at home. Movies can also be downloaded or streamed. Some movies are shown on television broadcasting stations.";
 const about= "Most movies are made so they can be watched at home or on a movie screen at movie theaters. Movies are shown in movie theaters a few weeks or months after or before the movie is released. Movies can be marketed using media. Movies are shown on pay television or cable television, or are sold or rented on DVD disks or videocassette tapes, so that people can watch the movies at home. Movies can also be downloaded or streamed. Some movies are shown on television broadcasting stations.";
 const contact= "Most movies are made so they can be watched at home or on a movie screen at movie theaters. Movies are shown in movie theaters a few weeks or months after or before the movie is released. Movies can be marketed using media. Movies are shown on pay television or cable television, or are sold or rented on DVD disks or videocassette tapes, so that people can watch the movies at home. Movies can also be downloaded or streamed. Some movies are shown on television broadcasting stations.";

 app.set('view engine' , 'ejs');
 app.use(express.static(__dirname+"/public"));
 app.use(bodyPrarser.urlencoded({extended:true}))
 mongoose.set("strictQuery", false);
 mongoose.connect("mongodb://127.0.0.1:27017/thougthsDB",{useNewUrlParser:true});

const shareschema=new mongoose.Schema({
   title: String,
   content:String
});
const models=mongoose.model("models",shareschema);

const aboutschema=new mongoose.Schema({
    name:String,
    gmail:String
})
const aboutsd=mongoose.model("abouts",aboutschema);
models.deleteMany({title:""},function(err){
   if(err){
      console.log(err);
   }
   else{
      console.log("sucessfully deleted");
   }
})

// var homelist=[];

 app.get("/",function(requ,resp){
   models.find({},function(err,homelist){
      if(!err){

    resp.render("home",{homecontent:home,homelists:homelist});
      }
   })
})
app.get("/about",function(reque,respo)
{
   aboutsd.find({},function(err,info){
      if(!err){
      respo.render("about",{abouts:about,information:info});
      }
   })
})
 
app.post("/about",function(requ,resp){
   const details= new aboutsd({
      name:requ.body.yourname,
      gmail:requ.body.gmail
   })
   details.save(); 
   resp.redirect("/about")
})


 app.get("/contactus",function(requ,resp){
    resp.render("contactus",{contacts:contact});
    
})   
app.get("/compose",function(reque,respo){
   respo.render("compose");
})


app.post("/compose",function(reque,respo){
   const post= new models({
      title:reque.body.list,
      content:reque.body.listcont
   })
   post.save(); 
   // homelist.push(post);
    respo.redirect("/");   
})

app.get("/posts/:postname",function(req,res){
   var search=_.lowerCase(req.params.postname); 
   models.find({},function(err,tile){
      if(!err){
         tile.forEach(function(post){
         var d=_.lowerCase(post.title);
         if(search == d){
      res.render("posts",{posttitle:post.title,postcontent:post.content})
         }
      })
   }
   })
})

 app.listen(3000,function(){
    console.log("server is on");
 })




