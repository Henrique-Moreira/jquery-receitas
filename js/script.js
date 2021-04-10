$(document).ready(function() {
    getReceitas();
});

function toggle(toggle) {
    // fadeToggle
    $(`#${toggle}`).slideToggle(1000);
}

function getReceitas() {
    let jsonFilePath = "json/receitas.json";
    $.get(jsonFilePath, function(data) {
        createRecipes(data);
    });
}

function createRecipes(receitas) {
    let recipes = $('#recipes');
    receitas.forEach((el, index) => createRecipe(el, recipes, index));
}

function createRecipe(receita, recipes, id) {

    let button = $("<button>");
    button.attr("id", "btn" + id);
    button.text(receita.titulo);
    button.click(() => {
        toggle("b" + id);
    })
    button.css({
        "background-image": `url(${receita.src})`
    })

    let box = $("<div>");
    box.addClass("box");
    box.attr("id", "b" + id);
    
    let box1 = $("<div>");
    box1.addClass("col-4");

    let h2 = $("<h2>");
    h2.text(receita.titulo);

    let img = $("<img>");
    img.attr("src", receita.src);

    box1.append(h2);
    box1.append(img);

    let box2 = $("<div>");
    box2.addClass("col-8");
    box2.addClass("box");

    let box3 = $("<div>");
    box3.addClass("col-5");

    let box4 = $("<div>");
    box4.addClass("col-7");

    let titleIngredientes = $("<h3>")
    titleIngredientes.text("Ingredientes");
    let ingredientes = $("<ul>");
    receita.ingredientes.forEach((el) => ingredientes.append( $("<li>").text(el) ) );

    let titleModoPreparo = $("<h3>")
    titleModoPreparo.text("Modo de Preparo");
    let modoPreparo = $("<ol>");
    receita.modoPreparo.forEach((el) => modoPreparo.append( $("<li>").text(el) ) );

    box3.append(titleIngredientes);
    box3.append(ingredientes);
    box4.append(titleModoPreparo);
    box4.append(modoPreparo);    

    box2.append(box3);
    box2.append(box4);

    box.append(box1);
    box.append(box2);

    box.hide();

    recipes.append(button);
    recipes.append(box);
}