var peepoDictionary = {
    "peepoSad" : "https://cdn.frankerfacez.com/emoticon/343302/1",
    "peepoWay" : "https://cdn.frankerfacez.com/emoticon/343207/1",
    "peeposun" : "https://cdn.frankerfacez.com/emoticon/342572/1",
    "peepoDepressed" : "https://cdn.frankerfacez.com/emoticon/342149/1",
    "peepoHandsUp" : "https://cdn.frankerfacez.com/emoticon/341660/1",
    "peepoGASM" : "https://cdn.frankerfacez.com/emoticon/341659/1",
    "peepoPoopoo" : "https://cdn.frankerfacez.com/emoticon/339612/1",
    "peepoStrong" : "https://cdn.frankerfacez.com/emoticon/337832/1",
    "peepoBlush" : "https://cdn.frankerfacez.com/emoticon/337543/1",
    "peepoK" : "https://cdn.frankerfacez.com/emoticon/337125/1",
    "Pog": "https://cdn.frankerfacez.com/emoticon/210748/2",
    "PepeSmoke": "https://i.imgur.com/JWuFWLQ.gif"
}
setTimeout(function(){
    var spans= Array.from(document.querySelectorAll('span'));
    for(i=0; i< spans.length; i++){
        if(peepoDictionary[spans[i].innerText] !== undefined){
            spans[i].innerHTML = "<img style='width:20px' src='"+ peepoDictionary[spans[i].innerText] +"' />";
        }      
    }


document.addEventListener('click', function (event) {
    var spans= Array.from(document.querySelectorAll('span'));
    for(i=0; i< spans.length; i++){
        if(peepoDictionary[spans[i].innerText] !== undefined){
            spans[i].innerHTML = "<img style='width:20px' src='"+ peepoDictionary[spans[i].innerText] +"' />";
        }      
    }
}, false);

document.addEventListener('keypress', function (event) {
    var spans= Array.from(document.querySelectorAll('span'));
    for(i=0; i< spans.length; i++){
        if(peepoDictionary[spans[i].innerText] !== undefined){
            spans[i].innerHTML = "<img style='width:20px' src='"+ peepoDictionary[spans[i].innerText] +"' />";
        }      
    }
}, false);
},2000);