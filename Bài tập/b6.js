
document.getElementsByClassName("btn-dn")[0].onclick=function(){
    if(document.getElementById("name").value==="huanrose@gmail.com"&&document.getElementById("password").value==="123456"){
        console.log("Đăng nhập thành công");
    }else{
        console.log("Sai mật khẩu hoặc tên đăng nhập");
    }
}