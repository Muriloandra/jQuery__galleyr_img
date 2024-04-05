$(document).ready(function () {
  // essa funcao ira deslizar o formulario para baixo
  $("header button").click(function () {
    $("form").slideDown();
  });
  // essa funcao ira deslizar o formulario para cima
  $(".button__reset").click(function () {
    $("form").slideUp();
  });
  // essa funcao nao ira deixar a pagina ser reinicializada
  $("form").on("submit", function (e) {
    e.preventDefault();
    const adressNewimages = $("#adressnewimage").val();
    const newItem = $("<li style='display: none'></li>");
    // coloca a imagem nova na pagina dentro do elemento li
    $(`<img src="${adressNewimages}"/>`).appendTo(newItem);
    $(`<div class="overlay__img__link">
    <a href="${adressNewimages}"target="_blank" title="Ver imagem original">Ver imagem original </a></div>`).appendTo(
      newItem
    );
    $(newItem).appendTo("ul");
    // adiciona imagem nova com transicao
    $(newItem).fadeIn(1000);
    // coloca novo endereco como vazio
    $("#adressnewimage").val(" ");
  });
});
