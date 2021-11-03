const desplegarMenu = () => {
    $("body").toggleClass("mobile-toggle");
}

menu.click((e) => {
    e.preventDefault();
    desplegarMenu();
});

menuCancel.click((e) => {
    e.preventDefault();
    desplegarMenu();
});

menuCancel2.click((e) => {
    e.preventDefault();
    desplegarMenu();
});