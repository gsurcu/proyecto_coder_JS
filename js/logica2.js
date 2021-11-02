menu.addClass("none");

const desplegarMenu = () => {
    $("body").addClass("mobile-toggle");
}

menu.click((e) => {
    e.preventDefault();
    desplegarMenu();
});