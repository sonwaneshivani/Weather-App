//Step-1 : Create an XMLHttpRequest
let request=new XMLHttpRequest();


//Step-2 : Open a connection
request.open('GET','https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=93f26e3c57081a6210de53b8dcfdfea4',true);
request.onload=function(){
    if(request.status>=200 && request.status<400){
        //get the data
        console.log("Success..!!!");
        let data=JSON.parse(request.responseText);
        let imgsrc="https://openweathermap.org/img/w/"+data.weather[0].icon+'.png';
        document.getElementById('mypara').innerHTML=data.main.temp+'F'; //F is farhenheit
        document.getElementById('myimg').src=imgsrc;
        console.log(data);
    }
    else{
        console.log("could not connect to server")
    }
} //constantly checking request status


//Step-3 : Check for Error
request.onerror=function(){
    console.log("Error!!");
}


//Step-4 : Send the request
request.send();