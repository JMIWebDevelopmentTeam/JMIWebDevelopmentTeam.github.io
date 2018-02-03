$(document).ready(function () {
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });



    function run() {
        //$("li").click(function() {
        var prev = $("#rotated li:first-child");
        $.unique(prev).each(function(i) {
            $(this).delay(i*600).slideUp(function() {
                $(this).appendTo(this.parentNode).slideDown();
            });
        });
        //});
    }

    window.setInterval(run,2000);
});

