module.exports = {
    apps : [
        {
            name: "passport-uicshib",
            script: "server.js",
            watch: true,
            ignore_watch : ["node_modules", "vue"],
            env: {
                "DOMAIN": "test.uic.edu",
                "SHIBALIKE": true,
                "SECRET": "CHANGE_ME_TO_A_RANDOM_STRING",
                "HTTPPORT": 3001,
                "HTTPSPORT": 3011
            }
        }
    ]
}
