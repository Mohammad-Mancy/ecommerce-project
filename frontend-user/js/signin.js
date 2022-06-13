document.getElementById("btn-login").addEventListener("click",  ()=> {
    var form = document.querySelector("form");
    var formdata = new FormData(form);
  
    axios({
  
      method: "post",
      url: "http://127.0.0.1:8000/api/v1/login",
      data: formdata,
  
    }).then(function (response){
        console.log(response);
        access_token = response.data.token.original.access_token
      if (access_token) {
        console.log(response.data)
        localStorage.setItem("access_token", access_token)
        localStorage.setItem('username', response.data.user.name)
        localStorage.setItem("user_id", response.data.user.id)
        window.location.href = "./pages/main.html";
      }
      else {
        alert("wrong input");
      }
    })

    });
  