$(function () {
    $('#btn').on('click', function (e) {
        e.preventDefault();
        const nombre1 = $('#nb1').val();
        const nombre2 = $('#nb2').val();
        // $.post( "http://localhost:7777/add",{nb1:nombre1,nb2:nombre2}, function( d ) {
        //     $('#resultat').html("<div class='lead text-center'>Résultat</div> <b class='display-2'>" + d +"</b>");
        //   });
        $.ajax({
            type: 'POST',
            data: {
                num1: nombre1,
                num2: nombre2
            },
            url: "http://localhost:7777/add",
            success: function (d) {
                $('#resultat').html("<div class='lead text-center'>Résultat</div> <b class='display-2'>" + d + "</b>");
            },
            error: function (e) {
                console.log("erreur :", e);
            }
        });
    });
});