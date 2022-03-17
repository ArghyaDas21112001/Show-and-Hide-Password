// checkbox
var inputPass = document.getElementById("pass"),
  inputChk = document.getElementById("chk"),
  label = document.getElementById("showhide");

inputChk.onclick = function () {
  if (inputChk.checked) {
    inputPass.setAttribute("type", "text");
    label.textContent = "Hide Password";
  } else {
    inputPass.setAttribute("type", "password");
    label.textContent = "Show Password";
  }
};

// eye
var inputPass2 = document.getElementById("pass2"),
  icon = document.getElementById("icon");

icon.onclick = function () {
  if (inputPass2.className == "active") {
    inputPass2.setAttribute("type", "text");
    icon.className = "fa fa-eye";
    inputPass2.className = "";
  } else {
    inputPass2.setAttribute("type", "password");
    icon.className = "fa fa-eye-slash";
    inputPass2.className = "active";
  }
};

//  button

var inputPass3 = document.getElementById("pass3"),
  btn = document.getElementById("btn");

btn.onclick = function () {
  if (inputPass3.className == "active") {
    inputPass3.setAttribute("type", "text");
    btn.textContent = "Hide";
    inputPass3.className = "";
  } else {
    inputPass3.setAttribute("type", "password");
    btn.textContent = "Show";
    inputPass3.className = "active";
  }
};
