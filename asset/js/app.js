$(document).ready(function () {

    $('.dropdown').hide();

    $('.link').click(function () {

        let dropdown = this.parentNode.querySelector('.dropdown');

        $(this).toggleClass('active');

        $(dropdown).slideToggle(1000);

    });

});
