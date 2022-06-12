document.addEventListener('DOMContentLoaded', function() {
document.getElementById("upload-item").addEventListener("click",  ()=>  {
    console.log('hello2');

    var form = document.querySelector("form");
    var formdata = new FormData(form);
    console.log(formadata)
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/v1/add_item",
      data: formdata,
      headers: { Authorization: `Bearer `+token}    
    }).then(function (response){
        console.log("hii");
        console.log(response);
      if (access_token) {
        alert("item was added successfuly");
      }
      else {
        alert("wrong input");
      }
    })
  
    });
});