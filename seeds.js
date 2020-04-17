var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
    {
    name: "Reading fever",
    image: "https://images.unsplash.com/photo-1524494860062-9442631ee30e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4c5915afaeb62534313cd38ab7420ab1&auto=format&fit=crop&w=752&q=80",
    description: "Bacon ipsum dolor amet andouille sausage ribeye capicola, pork swine prosciutto. Strip steak short loin kielbasa pig, biltong bresaola sausage pork loin. Spare ribs kielbasa ball tip flank biltong frankfurter. Pork boudin cupim rump swine doner t-bone ham pig porchetta ham hock jowl ribeye short ribs. Tri-tip turkey picanha rump, meatloaf spare ribs pig. Shoulder frankfurter sausage, turkey strip steak turducken pig drumstick shankle."
    },
    {
    name: "Breaking freer",
    image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c85daa025ee04c951b6ac12fe3ba031a&auto=format&fit=crop&w=1050&q=80",
    description: "Bacon ipsum dolor amet andouille sausage ribeye capicola, pork swine prosciutto. Strip steak short loin kielbasa pig, biltong bresaola sausage pork loin. Spare ribs kielbasa ball tip flank biltong frankfurter. Pork boudin cupim rump swine doner t-bone ham pig porchetta ham hock jowl ribeye short ribs. Tri-tip turkey picanha rump, meatloaf spare ribs pig. Shoulder frankfurter sausage, turkey strip steak turducken pig drumstick shankle."
    },
    {
    name: "Sun Shine",
    image: "https://images.unsplash.com/photo-1496545672447-f699b503d270?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ba3fa37b995a705a01d022cada13f726&auto=format&fit=crop&w=400&q=60",
    description: "Bacon ipsum dolor amet andouille sausage ribeye capicola, pork swine prosciutto. Strip steak short loin kielbasa pig, biltong bresaola sausage pork loin. Spare ribs kielbasa ball tip flank biltong frankfurter. Pork boudin cupim rump swine doner t-bone ham pig porchetta ham hock jowl ribeye short ribs. Tri-tip turkey picanha rump, meatloaf spare ribs pig. Shoulder frankfurter sausage, turkey strip steak turducken pig drumstick shankle."
    },
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log("removed campgrounds!");
    //         //add a few campgrounds
    //         data.forEach(function(seed){
    //             Campground.create(seed, function(err, campground){
    //                 if(err){
    //                     console.log(err);
    //                 }else{
    //                     console.log("added a campground");
    //                     //add a few comments
    //                     Comment.create(
    //                         {
    //                             text: "I love this place how a can check in!!",
    //                             author: "Flavia"
    //                         }, function(err, comment){
    //                             if(err){
    //                                 console.log(err);
    //                             }else{
    //                                 campground.comments.push(comment);
    //                                 campground.save();
    //                                 console.log("Created new comment");
    //                             }

    //                         });
    //                 }
    //             });
    //         });
            
    //     }
     });

    
};

module.exports = seedDB;