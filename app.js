const   express         = require("express"),
        app             = express(),
        bodyParser      = require("body-parser"),
        mongoose        = require("mongoose"),
        flash           = require("connect-flash"),
        passport        = require("passport"),
        LocalStrategy   = require("passport-local"),
        methodOverride  = require("method-override"),
        Campground      = require("./models/campground"),
        Comment         = require("./models/comment"),
        User            = require("./models/user"),
        seedDB          = require("./seeds");
    
//Rquireing routes
const   commentRoutes       = require("./routes/comments"),
        campgroundRoute     = require("./routes/campgrounds"),
        indexRoutes         = require("./routes/index")


//mongoose.connect(process.env.DATABASEURL, { useNewUrlParser: true });
mongoose.connect('mongodb://localhost:27017/RichardCamp', { useNewUrlParser: true });

//mLab DATABASE:
//mongoose.connect("mongodb://username:password@ds187090.mlab.com:87090/nameofthedatabase");
//console.log(DATABASEURL)

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); //seed the database

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "The Art of living life",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoute);
app.use("/campgrounds/:id/comments", commentRoutes);


app.listen(8080, function() {
    console.log("This server is runing in PORT 8080 Broh!, and the DB is also running")
});

// THis is for deploying or working in a cloud enviroment like Cloud9 or goormIDE
/* 
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("RichardCamp is open!");
});
 */