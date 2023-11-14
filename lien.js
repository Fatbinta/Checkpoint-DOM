var selectorById = document.getElementById("caroussel")
var element = selectorById.getAttribute("class")
selectorById.setAttribute("Produits", "class")
selectorById.removeAttribute("Produits")
console.log(selectorById);
