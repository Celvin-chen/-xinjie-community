module.exports = {
    publicPath: './',
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    devServer:{
        proxy:{
            "/gdWeather":{
                target:"https://api.jisuapi.com/",
                changeOrigin:true,
                pathRewrite:{
                    "^/gdWeather":'/'
                }
            }
        }
    }
}
