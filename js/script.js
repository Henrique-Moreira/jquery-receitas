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
        fillBoxs(data);
    });
}

function fillBoxs(receitas) {
    console.log(receitas);
}