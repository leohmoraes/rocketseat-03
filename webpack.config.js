//Video 02 configurando edtrutura 1
const path = require('path'); 

module.exports = {
    // entry: 'src/index.js',//arquivo de entrada... funciona em OS diferentes do windows
    entry: path.resolve(__dirname, 'src','index.js'),//arquivo de entrada... funciona no windows
    output: { //onde ele vai gerar o bundle, o arquivo compilado
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname,'public'),
    },
    module: {
        rules: [ //regras para cada arquivo
            {
                test: /\.js$/, //para o JS o responsavel é o babel
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
};