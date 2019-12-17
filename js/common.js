$(document).ready(function() {
  $(".hamburger").click(function() {
    $(".hamburger").toggleClass("is-active");
    $(".header__hidding-sidebar").toggleClass("menu-active");
  });
});
