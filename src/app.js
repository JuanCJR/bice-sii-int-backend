require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc"); //Libreria de documentacion de swagger
const swaggerUi = require("swagger-ui-express"); //Libreria de portal web de swagger

//initialization
app.use(cors());
app.use(express.json());

//Setting
app.set("PORT", process.env.PORT);


//Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "SII Integeración API",
        version: "0.1.0",
        description:
          "Servicio Backend API REST para la integracion con SII",
        contact: {
          name: "coreDevX",
        },
      },
      servers: [
        {
          url: "http://localhost:8081/api/v1",
        },
      ],
    },
    apis: ["src/routes/*.js"],
  };
  
// https://apicert.sii.cl/recursos/v1/globales/actividades.economicas  

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/api/v1/auth',require('./routes/auth'));




module.exports = app;
