const app = require('./app');


//inicializacion del servicio
function init(){
    app.listen(app.get('PORT')||8081);
    console.log(`Server on port ${app.get('PORT')}`)
};

init();