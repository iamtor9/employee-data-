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
const input1 = document.getElementById("formGroupExampleInput").value
const input2 = document.getElementById("formGroupExampleInput2").value
const input3 = document.getElementById("formGroupExampleInput3").value
const input4 = document.getElementById("formGroupExampleInput4").value
console.log(input1, input2, input3, input4);
};

