function BitmapHoles(strArr) { 

    // code goes here  
    var index = [],
          holes = 0,
          checker;
      for (var i=0; i < strArr.length; i++){
          strArr[i] = strArr[i].split('');
          for (var j=0; j < strArr[i].length; j++){
              if (strArr[i][j] === "0"){
                  index.push([i, j]);
              }
          }   
      }
      for (var c=0; c < index.length; c++){
          checker = false;
          for (var k=c+1; k < index.length; k++){
              if (index[k][0] === index[c][0]+1 && index[k][1] === index[c][1] || index[k][0] === index[c][0] && index[k][1] === index[c][1]+1){
                  checker = true;
              }
          }
          if (checker === false){
              holes += 1;
          }
      }
      return holes;
  
  }
     
  let arr = ["01111", "01101", "00011", "11110"]
  console.log(BitmapHoles(arr)); //result 3