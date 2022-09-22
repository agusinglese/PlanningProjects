require("dotenv").config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");

conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT || 3001, () =>
    console.log("listen at port ", process.env.PORT || 3001)
  );
});

//{"name": "P2", "duration":"3", "planningDate": "2022-10-10", "type": "Edilicios"}
//{"name":"Task1P2", "planningDate": "2022-10-12", "duration": "1", "idProject": "2" }
