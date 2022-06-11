document.getElementById("signup").addEventListener("click",  ()=> {
    // var form = document.querySelector("form");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmaition = document.getElementById("confirmation-password").value;
    var formdata = new FormData();
    formdata.append('name',name)
    formdata.append('email',email)
    formdata.append('password',password)
    formdata.append('password_confirmation',confirmaition)
    console.log(formdata);
    axios({
  
      method: "post",
      url: "http://127.0.0.1:8000/api/v1/register",
      data: formdata,
  
    }).then(function (response){
    access_token = response.data.token.original.access_token
    if (access_token) {
        localStorage.setItem("access_token", access_token)
        localStorage.setItem('username', response.data.user.name)
        window.location.href = "./main.html"
    } else {
        alert("worng input retry again.")
    }})
  });
  