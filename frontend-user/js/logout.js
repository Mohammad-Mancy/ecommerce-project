document.getElementById("log-out").addEventListener("click",  ()=> {
    // var token = localStorage.getItem("access_token")
    const token = localStorage.getItem('access_token');
    axios({
  
      method: "post",
      url: "http://127.0.0.1:8000/api/v1/logout",
      headers: { Authorization: `Bearer `+token}
    }).then(function (response){
            alert('hope you enjoyed :) ')
            localStorage.removeItem("access_token")
            localStorage.removeItem("username")
            window.location.href = "./../index.html"

        })
    });

  