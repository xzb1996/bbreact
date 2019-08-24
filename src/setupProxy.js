const proxy = require("http-proxy-middleware");
// 跨域配置
module.exports = (app)=>{
    app.use(proxy("/martshow",{
        target:"https://dsapi.beibei.com",
        changeOrigin:true,
    }))
    // 如果需要，继续向下
    // app.use(proxy("/martshow"),{
    //     target:"https://dsapi.beibei.com",
    //     changeOrigin:true,
    // })
}


// https://dsapi.beibei.com/martshow/v1/7702-1-all-0-1-0-15.html?client_info=&h5_uid=null










