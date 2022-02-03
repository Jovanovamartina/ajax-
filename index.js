console.log("connected");

/*Homework #1

*Create a button in HTML. And when the button is clicked it should create API Call.
*API call URL = https://thronesapi.com/api/v2/Characters/2
*It will return informations about John Snow :D 
*Print in HTML following properties: firstName, lastName, fullName, title, family and it's image ;)

*/

//selektiranje
let btn=document.getElementById("btn");
let theResult=document.getElementById("theResult");
//url adresa
let theUrl= "https://thronesapi.com/api/v2/Characters/2";

//function
function infoAboutJohnShow(theUrl){
    $.ajax({
        url:theUrl,
        success:function(response){
            console.log("success",response)
            printResults(response,theResult);
        },
        error: function(error){
            console.log(error);
        },
    });
}
//event
btn.addEventListener("click" , function(){
    infoAboutJohnShow(theUrl) ;
})
//function for printing
function printResults(objectOfCharacters,element){
    console.log(objectOfCharacters);
    
    element.innerHTML+="";
        element.innerHTML += `
            <ul>
                <li>first name ${objectOfCharacters.firstName}</li>
                <li>last name ${objectOfCharacters.lastName}</li>
                <li>full name ${objectOfCharacters.fullName}</li>
                <li>title ${objectOfCharacters.title}</li>
                <li>family ${objectOfCharacters.family}</li>
            </ul>
            
        
        `;
  }





/*
BONUS: 
*Create a button in HTML and when clicked it should get all the characters in GOT
*API call URL = https://thronesapi.com/api/v2/Characters
*Print in HTML following properties for every character: firstName, lastName, fullName, title, family and it's image
** REUSE the function from the first homework exercise =)
*/

myBtn=document.getElementById("myBtn");
myResult=document.getElementById("myResult");
myUrl= "https://thronesapi.com/api/v2/Characters";

function gotCharacters(myUrl){
    $.ajax({
        url:myUrl,
        success:function(secondResponse){
            console.log("success",secondResponse)
           printingResults(secondResponse,myResult);
        },
        error: function(secondError){
            console.log(secondError);
        },
    });
}

myBtn.addEventListener("click" , function(){
    gotCharacters(myUrl) ;
})

function printingResults(array,myElement){
    console.log(array);
    
    myElement.innerHTML+="";
    for (let i=0;i<array.length;i++){
        myElement.innerHTML += `
            <ul>
                <li>first name ${array[i].firstName}</li>
                <li>last name ${array[i].lastName}</li>
                <li>full name ${array[i].fullName}</li>
                <li>title ${array[i].title}</li>
                <li>family ${array[i].family}</li>
            </ul>
            
        
        `;
    }
  }