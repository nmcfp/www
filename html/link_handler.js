$(document).ready(function() { history.replaceState({link:"home"},null,"?content=home"); });

var xmlhttp;
if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
}
else {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

window.onpopstate = function (event) {
    $("#"+event.state.link).click();
};

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        $("#content").fadeOut(150);
        window.setTimeout(function() {
            document.getElementById("content").innerHTML = xmlhttp.responseText;
            try { eval(document.getElementById("hide").innerHTML); }
            catch (err) {}
        }, 150);
        $("#content").fadeIn(150);
    }
};

$("body").on("click","#home",function(e) {
    e.preventDefault();

    if (history.state.link !== "home") {
        history.pushState({link:"home"},null,"index.php?content=home");
    }
    
    xmlhttp.open("GET","./html/home.html",true);
    xmlhttp.send();
});

//$("body").on("click","#events",function(e) {
//    e.preventDefault();
//    
//    if (history.state.link !== "events") {
//        history.pushState({link:"events"},null,"index.php?content=events");
//    }
//    
//    xmlhttp.open("GET","./html/events.html",true);
//    xmlhttp.send();
//});

$("body").on("click","#issues",function(e) {
    e.preventDefault();

    if (history.state.link !== "issues") {
        history.pushState({link:"issues"},null,"index.php?content=issues");
    }
    xmlhttp.open("GET","./html/issues.html",true);
    xmlhttp.send();
});

$("body").on("click","#people",function(e) {
    e.preventDefault();
    
    if (history.state.link !== "people") {
        history.pushState({link:"people"},null,"index.php?content=people");
    }
    xmlhttp.open("GET","./html/people.html",true);
    xmlhttp.send();
});

$("body").on("click","#contact",function(e) {
    e.preventDefault();

    if (history.state.link !== "contact") {
        history.pushState({link:"contact"},null,"index.php?content=contact");
    }
    
    xmlhttp.open("GET","./html/contact.html",true);
    xmlhttp.send();
});

$("body").on("click","#news",function(e) {
    e.preventDefault();

    if (history.state.link !== "news") {
        history.pushState({link:"news"},null,"index.php?content=news");
    }
    
    xmlhttp.open("GET","./html/news.html",true);
    xmlhttp.send();
});

$("body").on("click","#donate",function(e) {
    e.preventDefault();

    if (history.state.link !== "donate") {
        history.pushState({link:"donate"},null,"index.php?content=donate");
    }
    
    xmlhttp.open("GET","./html/donate.html",true);
    xmlhttp.send();
});

$("body").on("click","#coming_soon",function(e) {
    e.preventDefault();

    if (history.state.link !== "coming_soon") {
        history.pushState({link:"coming_soon"},null,"index.php?content=coming_soon");
    }
    
    xmlhttp.open("GET","./html/coming_soon.html",true);
    xmlhttp.send();
});