var fs=require('fs');
var data=fs.readFileSync('words.json', 'utf8');
var words=JSON.parse(data);
var bodyparser=require('body-parser');
console.log(words);
var express=require('express');

var app=express();

var server=app.listen(3030,listening);

function listening(){
console.log("listening..");
}
app.use(express.static('website'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

document.getElementById("get_the_file").addEventListener("change", function() {
    var file_to_read = document.getElementById("get_the_file").files[0];
    var fileread = new FileReader();
    fileread.onload = function(e) {
      var content = e.target.result;
      // console.log(content);
      var intern = JSON.parse(content); // Array of Objects.
      console.log(intern); // You can index every object
    };
    fileread.readAsText(file_to_read);
  });