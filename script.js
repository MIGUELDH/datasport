const express = require('express');
const app = express();

// Ruta para obtener los últimos partidos del Liverpool
app.get('/ultimos-partidos', (req, res) => {
    const ultimosPartidos = [
        { local: 'Liverpool', resultado: '2-1', visitante: 'Chelsea' },
        { local: 'Arsenal', resultado: '0-3', visitante: 'Liverpool' },
        // Agrega más partidos según lo necesites
    ];
    res.json(ultimosPartidos);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
