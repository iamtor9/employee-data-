// function getArray(cb) {
//     localforage.getItem("array").then(function (result) {
//     cb(result || []); //{name, score}
//     });
//     }

//     function setArray (newArray, cb) {
//         localforage.setItem("array", newArray).then(cb);
//        }
      
document.querySelector("#submitButton").addEventListener("click", function(event) {
    event.preventDefault();
    submitInfo();
})

function submitInfo() {
console.log("you clicked")
document.getElementById("formGroupExampleInput").value
document.getElementById("formGroupExampleInput2").value
document.getElementById("formGroupExampleInput3").value
document.getElementById("formGroupExampleInput4").value

};

