function makeAjaxCall(url, methodType){
  let promiseObj = new Promise(function(resolve, reject){
    debug ? console.log(url) : "" ; 
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open(methodType, url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
      if (xmlhttp.readyState === 4){
        if (xmlhttp.status === 200){
          debug ? console.log("xmlhttp done succesfully") : "";
          let serverResponse = xmlhttp.responseText;
          debug ? console.log(serverResponse) : "";
          resolve(serverResponse);
        } else {
          reject(xmlhttp.status);
          console.log("xmlhttp failed");
        }
      } else {
        debug ? console.log("xmlhttp proccesing going on") : "";
      }
    }
    debug ? console.log("request sent succesfully") : "";
  });
  return promiseObj;
}
function errorHandler(statusCode){
  console.log("failed with status", status);
}
