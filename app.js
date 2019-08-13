      
document.querySelector("#submitButton").addEventListener("click", function(event) {
    event.preventDefault();
    submitInfo();
})

function submitInfo() {
console.log("you clicked")
const input1 = document.getElementById("formGroupExampleInput").value
const input2 = document.getElementById("formGroupExampleInput2").value
const input3 = document.getElementById("formGroupExampleInput3").value
const input4 = document.getElementById("formGroupExampleInput4").value
array.push(input1, input2, input3, input4);
};

var array = []
console.log(array);
//add click listener on submitbutton
document.querySelector("#submitButton").addEventListener("click", function(){
    //
    const value = document.querySelector(".form-control").value;
    localforage.getItem("saved").then(function(result){
      if(!result){
        result = [];
      }
      result.push(value);
      localforage.setItem("saved", result)
        .then(function(){
          console.log("saved")
          console.log(result);
        });
    });
    
  });
  
  //const div = document.querySelector("div");
  //setInterval(function(){
    //localforage.getItem("saved").then(function(result){
      //if(!result){
        //result = [];
     // }
      //for(let i = 0; i<result.length; i++){
        //const br = document.createElement("br");
        //div.append(br, result[i])
      //}
    //});
  //}, 500)
