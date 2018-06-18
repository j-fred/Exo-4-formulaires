$(function () {
    $('#btn').on('click', function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            data: "nb1=" + nb1 + "&nb2=" + nb2,
            url: "http://localhost:7777/add",
            success: function (d) {
                const nombre1 = nb1.value;
                const nombre2 = nb2.value;
                const resultat = Number(nombre1) + Number(nombre2);
                $('#resultat').html("<div class='lead text-center'>Résultat</div> <b class='display-2'>" + resultat+"</b>");
            },
            error: function (e) {
                console.log("erreur :");
            }
        });
    });
});