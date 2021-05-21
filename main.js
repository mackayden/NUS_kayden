const database = require("./database"); 

database.connection.query("select * from seller", (errors, results) => {
    if (errors) {
      console.log("Errors: " + errors);
    } else {
      console.log(results);
    }
  });