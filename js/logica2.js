const desplegarMenu = () => {
    $("body").toggleClass("mobile-toggle");
}

menu.click((e) => {
    e.preventDefault();
    desplegarMenu();
});