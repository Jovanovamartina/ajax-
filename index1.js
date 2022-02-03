console.log("connected");

/*
Homework #2

*Create a button in HTML. When clicked it should fetch the continents in GOT World :D 
*API call URL = https://thronesapi.com/api/v2/Continents
*This url will return the names of the continents in GOT World
*Print the name of the continent in the HTML in a table.
*/

//selektiranje
let myButton=document.getElementById("myButton");
let resultDiv=document.getElementById("result");
//url
let myUrl="https://thronesapi.com/api/v2/Continents";

function fetchContinents(url){
    let promiseOfFetch =fetch(url);
    console.log(promiseOfFetch);

    promiseOfFetch.then(function(response){
        console.log(response);
        return response.text();
    })
    .then(function(result){
        console.log(result);
        let parsedResult=JSON.parse(result);
        console.log(parsedResult);
        printResults(parsedResult,resultDiv);
    })
    .catch(function(error){
        console.log(error);
    });
}
//event
myButton.addEventListener("click",function(){
    fetchContinents(myUrl);
})

function printResults(array,element){
    console.log(array);
    element.innerHTML+="";
   for(let i=0;i<array.length;i++){
        element.innerHTML+=`
        <table>
        <tr>
        <td>${array[i].name}</td>
        </tr>
        </table>`;
    }
}