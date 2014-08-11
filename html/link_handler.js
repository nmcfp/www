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

$("body").on("click","#events",function(e) {
    e.preventDefault();
    
    if (history.state.link !== "events") {
        history.pushState({link:"events"},null,"index.php?content=events");
    }
    
    xmlhttp.open("GET","./html/events.html",true);
    xmlhttp.send();
});

$("body").on("click","#call",function(e) {
    e.preventDefault();
    
    if (history.state.link !== "call") {
        history.pushState({link:"call"},null,"index.php?content=call");
    }
    
    xmlhttp.open("GET","./html/call.html",true);
    xmlhttp.send();
});

$("body").on("click","#dream",function(e) {
    e.preventDefault();

    if (history.state.link !== "dream") {
        history.pushState({link:"dream"},null,"index.php?content=dream");
    }
    
    xmlhttp.open("GET","./html/dream.html",true);
    xmlhttp.send();
});

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

$("body").on("click","#message",function(e) {
    e.preventDefault();

    if (history.state.link !== "message") {
        history.pushState({link:"message"},null,"index.php?content=message");
    }
    
    xmlhttp.open("GET","./html/message.html",true);
    xmlhttp.send();
});

$("body").on("click","#host",function(e) {
    e.preventDefault();

    if (history.state.link !== "host") {
        history.pushState({link:"host"},null,"index.php?content=host");
    }
    
    xmlhttp.open("GET","./html/host.html",true);
    xmlhttp.send();
});

$("body").on("click","#endorsement",function(e) {
    e.preventDefault();

    if (history.state.link !== "endorsement") {
        history.pushState({link:"endorsement"},null,"index.php?content=endorsement");
    }
    
    xmlhttp.open("GET","./html/endorsement.html",true);
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

$("body").on("click","#cruz_info",function(e) {
    e.preventDefault();

    if (history.state.link !== "cruz_info") {
        history.pushState({link:"cruz_info"},null,"index.php?content=call#Cruz");
    }
    
    $(document).scrollTop( $("#Cruz").offset().top );
});