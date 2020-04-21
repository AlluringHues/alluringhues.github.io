
//Get data from spreadsheet

function init() {
  Tabletop.init({
    key:
      "https://docs.google.com/spreadsheets/d/1dpPtKnv9yQp-FZ-1o8GW-CicmkqpUNVLJpHpw_A6yPg/edit?usp=sharing",
    simpleSheet: true,
  }).then(function (data, tabletop) {
    
    displayLatestBlog(data);

    displaySidebar(data);
    
   
  });
}
window.addEventListener("DOMContentLoaded", init);


//Display latest content on blog page
function displayLatestBlog(x) {
    var latest = x[x.length-1];  //Picks up the latest blog

    var image=document.querySelector('.image'); 
    image.src = latest.db_image_src;                //Add blog image 
    
    
    var title = document.querySelector('.titleBlog');
    title.innerHTML = latest.db_title;              //Add title of Latest Blog               
    
    
    var content = document.querySelector('.content');
    content.innerHTML = latest.db_content;          //Add content of Latest Blog
    console.log(image.src);
    if (
      image.src === "https://alluringhues.github.io/#" ||
      image.src === "https://alluringhues.github.io/"
    ) {
      var main = document.querySelector(".main");
      main.removeChild(image);
    }   //check if image provided. If not,delete the <img> tag.
}



function displaySelectedBlog(data, card) {
     var changeTitle = document.querySelector('.titleBlog');
    //  var changeImage = document.querySelector('.image');
     var changeContent = document.querySelector('.content');
     data.forEach(function (item) {
         console.log(item);
         if (item.db_title === card.innerHTML) {
             changeTitle.innerHTML = item.db_title;
             changeContent.innerHTML = item.db_content;
         }         
     })
    return(null);
}








//Create cards in ./sidebar/w

function displaySidebar(y){

    for (var i = y.length - 1; i >= 0; i--) {
        var w = document.querySelector(".w");
        var link = document.createElement("a");
        link.classList.add("latestBlogLink");
        link.href = "#";
        var card = document.createElement("div");
        card.classList.add("card");

        var title = document.createElement("h1");
        title.classList.add("card_title");
        title.innerHTML = y[i].db_title;

        var date = document.createElement("p");
        date.classList.add("card_date");
        date.innerHTML = 'posted on'+ ' ' +y[i].db_date;

        w.appendChild(card);
        card.appendChild(link);
        link.appendChild(title);
        link.appendChild(date);
        x = 3;
    }
    var cards = document.querySelectorAll('.card_title')
    cards.forEach(function (card) {
        card.addEventListener('click' ,function() {
            displaySelectedBlog(y, card);
        });
    });
}

    
