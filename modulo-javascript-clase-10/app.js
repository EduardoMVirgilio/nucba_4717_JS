document.getElementById("logo"); // h1
document.getElementsByClassName("item"); // [li.item,li.item,li.item,li.item]
document.getElementsByTagName("li"); // [li,li,li,li]
document.querySelector("li.item"); // <li>1</li>
document.querySelectorAll("li.item"); // [li.item,li.item,li.item,li.item]

document.body.children[1]; // ul
document.querySelector("li.item").parentElement; // ul
document.querySelector("li.item:nth-child(2)").nextElementSibling; // <li>3</li>
document.querySelector("li.item:nth-child(2)").previousElementSibling; // <li>1</li>
