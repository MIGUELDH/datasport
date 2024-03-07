$(document).ready(function() {
    $('#scrapeButton').click(function() {
        // Hacer solicitud AJAX a la página web objetivo
        $.ajax({
            url: 'https://www.example.com', // URL de la página a la que se va a hacer scraping
            method: 'GET',
            success: function(response) {
                // Procesar los datos recibidos (en este ejemplo, simplemente mostrarlos en la página)
                $('#results').html(response);
            },
            error: function(error) {
                console.log('Error al realizar la solicitud:', error);
                $('#results').html('<p>Ocurrió un error al obtener los datos.</p>');
            }
        });
    });
});
