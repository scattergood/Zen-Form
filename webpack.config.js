const webpack = require('webpack');

module.exports = {
    entry: {
        registerPage: "./js/registerPage.js",
        editForm: "./js/editForm.js"
    },
    output: {
        libraryTarget: "amd",
        filename: "[name].js"
    },
    externals: [{
        "q": true,
        "react": true,
        "react-dom": true
    },
        /^TFS\//, // Ignore TFS/* since they are coming from VSTS host 
        /^VSS\//  // Ignore VSS/* since they are coming from VSTS host
    ],
    resolve: {
        alias: { "OfficeFabric": "../node_modules/office-ui-fabric-react/lib-amd" }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]    
};