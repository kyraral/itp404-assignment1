
$('#submit').on('click', function(event) {
  console.log("yes");
  let search=document.getElementById('search').value;

  event.preventDefault();

  $('#results').html('Loading...');


let url = `https://www.reddit.com/r/${search}.json`;

let promise = $.ajax({type:'GET',url:url});

promise.then (function(result)
{console.log('success',result);
let html=`  <h2> Results </h2>`+'';
result.data.children.forEach(function (dataChild) {
  html+=
  `<div style="margin-top:10px;">
  <p>Titile: ${dataChild.data.title}</p>
  <p>Score: ${dataChild.data.score}</p>
  <p>Author: ${dataChild.data.author}</p>
  </div>`
});

$('#results').html(html);

},
  function (error) {console.log('error',error);}
) });
