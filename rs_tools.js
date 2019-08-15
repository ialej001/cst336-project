const mysql = require('mysql');

module.exports = {
    createConnection: function() {
        var conn = mysql.createConnection({
            host: "us-cdbr-iron-east-02.cleardb.net",
            user: "b91f42fc83bc56",
            password: "70d8e8dd",
            database: "heroku_32cdeda847586a8"
        });
        return conn;
      },

      query: function (queryTxt, queryParams) {
        var conn = this.createConnection();
        return new Promise(function (resolve, reject) {
            conn.connect(function (err) {
                if (err) throw err;
                conn.query(queryTxt, queryParams, function (err, result) {
                    if (err) {
                        return reject(err);
                    }
                    resolve(result);
                    conn.end();
                });
            });
        });
    }
}
