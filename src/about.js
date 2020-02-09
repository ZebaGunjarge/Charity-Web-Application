let btn=document.getElementById("about");

function first(e)
{

    e.preventDefault();
    btn.innerHTML= "AboutUS";
}

btn.addEventListener("click", first);