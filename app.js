let express = require("express");
let app =  express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true})); // setting up body-parser
app.set("view engine", "ejs"); // not need to write every single fileName.ejs This is already doing for Us 

   let campgrounds = [
       {name: "Salmon Black", image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg"},
       {name: "Bob Black", image: "https://cdn.pixabay.com/photo/2014/11/15/23/30/yellow-mountains-532857_1280.jpg"},
       {name: "LInda Black", image: "https://cdn.pixabay.com/photo/2013/10/02/23/03/dawn-190055_1280.jpg"},
       {name: "White", image: "https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_1280.jpg"},
       {name: "Black", image: "https://cdn.pixabay.com/photo/2014/05/03/00/42/vw-camper-336606_1280.jpg"},
       {name: "Green", image: "https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022_1280.jpg"},
 ]; 

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) { // This is shows all campgrounds that we have 
   res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){ // this is one is doing new campground where you can sumbit new name and image 
    //res.send("You hit the post Route"); // checking if it's working or not
    // get data from from and add to campground array
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
})

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});