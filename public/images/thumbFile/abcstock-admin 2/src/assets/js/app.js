import $ from 'jquery';

$(document).ready(function () {
    $(".sidebar").on("click", ".heading", function () {

        $(this).toggleClass("active").next().slideToggle();

        $(".contents").not($(this).next()).slideUp(300);

        $(this).siblings().removeClass("active");
    });
});