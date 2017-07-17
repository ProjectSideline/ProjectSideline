module.exports = {
    entry: './app/app.js',
    
    output: {
        filename: 'public/bundle.js'
    },

    module: {
        loaders: [
            {
            //picking out .js and .jsx files
            test: /\.jsx?$/,
            //only processing files in /app
            include: /app/,
            loader: 'babel-loader',
            query: {
                presets:['react', 'es2015']
                }

            }
        ]
    },
    //allows debugging in react in chrome. Without it, all errors will say they are coming from bundle.js
    devtool: 'eval-source-map'
};