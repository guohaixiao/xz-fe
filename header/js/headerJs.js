document.getElementsByClassName("top_left")[0].onclick = function () {
    document.getElementsByClassName("select_city")[0].style.display = "block";
    document.getElementsByClassName("top_left")[0].classList.add("btnActive");
}
document.body.onclick = function (event) {
    if (event.target.innerText != "西安市" && event.target.innerHTML.toString().indexOf("select_city") != -1) {
        document.getElementsByClassName("select_city")[0].style.display = "none";
        document.getElementsByClassName("top_left")[0].classList.remove("btnActive");
    }

}