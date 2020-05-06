// webpack 是node写出来 node写法
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCss = require('optimize-css-assets-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    // devServer:{  //开发服务器的配置
    //     port:3000,  //端口
    //     progress:true,
    //     contentBase:'/dist'
    // },
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                cache:true,
                parallel:true,
                sourceMap:true
            }),
            new OptimizeCss()
        ]
    },
    mode:'production', //模式 默认两种模式 production development
    entry:'./src/index.js', //入口
    output:{
        filename:'bundle.js', //打包后的文件名 'bundle.[hash:8].js': hash:8 每次打包生成8位hash字符
        path: path.resolve(__dirname,'dist'), //打包路径必须是一个绝对路径
    },
    plugins:[  //数组 放在webpack所有的插件
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            // minify:{
            //     removeAttributeQuotes:true,  //去除HTML的双引号
            //     collapseWhitespace:true,  //压缩成一行
            // },
            // hash:true
        }),

        new MiniCssExtractPlugin({
            filename: 'main.css',
        })
    ],
    module:{ //模块
            // loader
        rules:[  //规则 css-loader 接续 @import这种语法
            // style-loader 他是把css 插入到head的标签中
            //loader的特点 希望单一
            //loader的用法 字符串只用一个loader
            //多个loader需要 []
            //loader的顺序 默认的是从右向左执行,从下到上执行
            //loader还可以写成对象方式
            {test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,                  
                    'css-loader',
                    'postcss-loader',
                ]
            },

            {test:/\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader', // @import 解析路劲
                    'postcss-loader',
                    'less-loader' //把less -->css 
                ]
            }
        ]
    }
        
    
}