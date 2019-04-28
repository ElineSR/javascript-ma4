
var requestURL = "https://jsonplaceholder.typicode.com/todos";
var request = new XMLHttpRequest();
request.open('GET',requestURL);

request.responseType = 'text';
request.send();

request.onload = function(){
    var cardsTodoText = request.response;
    var cardsTodo = JSON.parse(cardsTodoText);
    showCards (cardsTodo);
};



function showCards(jsonObj){
    var cards = jsonObj[''];
};

for (var i = 0; i < cards.length; i++){
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    
    myH2.textContent = cards[i].userId;
    myPara1.textContent = 'Id: ' + cards[i].id;
    myPara2.textContent = 'Title: ' + cards[i].title;
    myPara3.textContent = 'Completed: ' + cards[i].completed;
    
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
 
    div.appendChild(myArticle);    
    
    
}
