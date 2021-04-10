$(document).ready(function() {
    hideAll();
    getReceitas();

    $("#btn1").click(() => {
        toggle("b1");
    })
    $("#btn2").click(() => {
        toggle("b2");
    })
    $("#btn3").click(() => {
        toggle("b3");
    })
});

function toggle(toggle) {
    $(`#${toggle}`).fadeToggle();
}

function hideAll() {
    $(`#b1`).hide();
    $(`#b2`).hide();
    $(`#b3`).hide();
}

function getReceitas() {
    let jsonFilePath = "json/receitas.json";
    $.get(jsonFilePath, function(data) {
        createRecipes(data);
    });
}

function createRecipes(receitas) {
    let recipes = $('#recipes');
    receitas.forEach((el) => createRecipe(el, recipes));
}

function createRecipe(receita, recipes) {

    /*
                <div class="metade">
                <h2>Torta de Bolacha</h2>
                <img src="https://t2.rg.ltmcdn.com/pt/images/4/5/2/img_torta_de_bolacha_com_flan_e_chocolate_4254_600.jpg" alt="">
            </div>
            <div class="box">
                <div class="metade">
                    <h3>Ingredientes</h3>
                    <ul>
                        <li>2 copos leite</li>
                    </ul>
                </div>
                <div class="metade">
                    <h3>Modo de Preparo</h3>
                    <ol>
                        <li>Leve ao fogo</li>
                    </ol>
                </div>
            </div>
    */
    
    let h2 = $("<h2>");
    h2.text(receita.titulo);

    let img = $("<img>");
    img.attr("src", receita.src);

    let ingredientes = $("<ul>");
    receita.ingredientes.forEach((el) => ingredientes.append( $("<li>").text(el) ) );

    let modo_preparo = $("<ol>");
    receita.modo_preparo.forEach((el) => modo_preparo.append( $("<li>").text(el) ) );

    recipes.append(h2);
    recipes.append(img);
    recipes.append(ingredientes);
    recipes.append(modo_preparo);

}