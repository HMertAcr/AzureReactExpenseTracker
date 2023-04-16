const mysql = require('mysql');
const Buffer = require('buffer').Buffer;

const DigiCertGlobalRootCA = "-----BEGIN CERTIFICATE-----\n" +
    "MIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjANBgkqhkiG9w0BAQUFADBh\n" +
    "MQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\n" +
    "d3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD\n" +
    "QTAeFw0wNjExMTAwMDAwMDBaFw0zMTExMTAwMDAwMDBaMGExCzAJBgNVBAYTAlVT\n" +
    "MRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5kaWdpY2VydC5j\n" +
    "b20xIDAeBgNVBAMTF0RpZ2lDZXJ0IEdsb2JhbCBSb290IENBMIIBIjANBgkqhkiG\n" +
    "9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4jvhEXLeqKTTo1eqUKKPC3eQyaKl7hLOllsB\n" +
    "CSDMAZOnTjC3U/dDxGkAV53ijSLdhwZAAIEJzs4bg7/fzTtxRuLWZscFs3YnFo97\n" +
    "nh6Vfe63SKMI2tavegw5BmV/Sl0fvBf4q77uKNd0f3p4mVmFaG5cIzJLv07A6Fpt\n" +
    "43C/dxC//AH2hdmoRBBYMql1GNXRor5H4idq9Joz+EkIYIvUX7Q6hL+hqkpMfT7P\n" +
    "T19sdl6gSzeRntwi5m3OFBqOasv+zbMUZBfHWymeMr/y7vrTC0LUq7dBMtoM1O/4\n" +
    "gdW7jVg/tRvoSSiicNoxBN33shbyTApOB6jtSj1etX+jkMOvJwIDAQABo2MwYTAO\n" +
    "BgNVHQ8BAf8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUA95QNVbR\n" +
    "TLtm8KPiGxvDl7I90VUwHwYDVR0jBBgwFoAUA95QNVbRTLtm8KPiGxvDl7I90VUw\n" +
    "DQYJKoZIhvcNAQEFBQADggEBAMucN6pIExIK+t1EnE9SsPTfrgT1eXkIoyQY/Esr\n" +
    "hMAtudXH/vTBH1jLuG2cenTnmCmrEbXjcKChzUyImZOMkXDiqw8cvpOp/2PV5Adg\n" +
    "06O/nVsJ8dWO41P0jmP6P6fbtGbfYmbW0W5BjfIttep3Sp+dWOIrWcBAI+0tKIJF\n" +
    "PnlUkiaY4IBIqDfv8NZ5YBberOgOzW6sRBc4L0na4UU+Krk2U886UAb3LujEV0ls\n" +
    "YSEY1QSteDwsOoBrp+uvFRTp2InBuThs4pFsiv9kuXclVzDAGySj4dzp30d8tbQk\n" +
    "CAUw7C29C79Fv1C5qfPrmAESrciIxpg0X40KPMbp1ZWVbd4=\n" +
    "-----END CERTIFICATE-----\n"

const config =
{
    host: 'expense-tracker-demo.mysql.database.azure.com',
    user: 'expense_admin',
    password: 'Berkay147258369',
    database: 'expense_tracker',
    port: 3306,
    ssl: { ca: DigiCertGlobalRootCA }
};

const conn = new mysql.createConnection(config);

function establishConnection() {

    conn.connect(
        function (err) {
            if (err) {
                console.log("!!! Cannot connect !!! Error:");
                throw err;
            }
            else {
                console.log("Connection established.");
            }
        }
    );

}

function createUser(username) {
    establishConnection();
    conn.query('INSERT INTO users (username) VALUES (?) ', [username],
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Inserted ' + results.affectedRows + ' row(s).');
        }
    );
    conn.end(
        function (err) {
            if (err) throw err;
            else console.log('Done.')
        }
    );
};

function readData(username) {
    establishConnection();
    conn.query('SELECT * FROM expenses WHERE username = ?', [username],
        function (err, rows, fields) {
            if (err) throw err;
            else {
                console.log("User data received from Db:");
                console.log(rows);
                return rows;
            }
        }
    );
    conn.end(
        function (err) {
            if (err) throw err;
            else console.log('Done.')
        });
};

function insertData(username, title, amount, date) {
    establishConnection();
    conn.query('INSERT INTO expenses (title, amount, date, username) VALUES (?, ?, ?, ?)', [title, amount, date, username],
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
    conn.end(
        function (err) {
            if (err) throw err;
            else console.log('Done.')
        });
};

function deleteData(username, id) {
    establishConnection();
    conn.query('DELETE FROM expenses WHERE username = ? AND id = ?', [username, id],
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Deleted ' + results.affectedRows + ' row(s).');
        })
    conn.end(
        function (err) {
            if (err) throw err;
            else console.log('Done.')
        });
};