function getArray(cb) {
    localforage.getItem("array").then(function (result) {
    cb(result || []); //{name, score}
    });
    }

    function setArray (newArray, cb) {
        localforage.setItem("array", newArray).then(cb);
       }
       