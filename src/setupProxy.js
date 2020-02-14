const proxy = require("http-proxy-middleware");

module.exports = function(app){
    app.use(proxy("/post",{target:"http://117.17.196.142:3003"}),
            proxy("/auth",{target:"http://117.17.196.142:8002"}));
};