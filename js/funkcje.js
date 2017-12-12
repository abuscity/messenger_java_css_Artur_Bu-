//ukrywanie pokazywanie
function pokaz(element) {
    $(element).removeClass("hidden-xs-up");
}
function ukryj(element) {
    $(element).addClass("hidden-xs-up");
}
function pokazNowyLogin(e) {
    e.preventDefault();
    pokaz("#newlogin");
    ukryj("#chat");
    ukryj("#login");

}

function pokazCzat() {
    ukryj("#newlogin");
    pokaz("#chat");
    ukryj("#login");
}
function zaloguj(e) {
    pokazCzat();
}
function wyloguj(e) {
    ukryj("#newlogin");
    ukryj("#chat");
    pokaz("#login");
}
$.when($.ready).then(function () {
    $(document).on("click", "#btnNowy", pokazNowyLogin);
    $(document).on("click", "#btnLoguj", zaloguj);
    $(document).on("click", "#btnWyloguj", wyloguj);
    //$("#nowy").click(pokazNowyLogin);
});