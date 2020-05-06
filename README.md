# webpackdemo
webpackdemo
webpack初始化：npm init
webpack安装webpack-cli：npm install webpack webpack-cli -D

webpack打包：npx webpack 新版的命令

#手动配置webpack
-默认配置文件的名字是：webpack.config.js
-自定义配置文件名称打包命令：npx webpack --config 自定义名称

-在package.json 中scripts下添加参数：
 "build":"webpack --config webpack.config.js"
bulid是自定义的没有要求，
执行npm run bulid 效果等于  npx webpack --config 自定义名称

安装 npm install webpack-dev-server -D
npx webpack-dev-server  或者 npm run dev

安装html插件：npm install html-webpack-plugin -D
安装css: npm install css-loader style-loader -D
安装less: npm install less less-loader

抽离css插件安装：npm install mini-css-extract-plugin -D

npm install postcss-loader autoprefixer -D
npm install optimize-css-assets-webpack-plugin -D
npm install uglifyjs-webpack-plugin -D

