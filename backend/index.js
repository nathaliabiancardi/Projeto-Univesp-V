const express = require ('express');

const app = express();

app. get('/', (request, response) => {
    return response.json({
        evento: 'OmniStack 11.0',
        Aluno: 'Nathalia Biancardi'
    });
});

app.listen(3333);

