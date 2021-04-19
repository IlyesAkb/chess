const path = require('path');

//Плагины

// https://vue-loader.vuejs.org/ru/#%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-vue-loader
const { VueLoaderPlugin } = require('vue-loader');

// https://github.com/jantimon/html-webpack-plugin#options
const HtmlWebpackPlugin = require('html-webpack-plugin');

// https://webpack.js.org/plugins/mini-css-extract-plugin/
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Конфиг вебпака.
module.exports = (env, options) => {
  const isProd = options.mode === 'production';
  
  return ({
    // Базовый путь, откуда webpack начнет искать файлы
    // https://webpack.js.org/configuration/entry-context/#context
    context: path.resolve(__dirname, 'src'),
    
    // Путь к точке входа, где инициализируется приложение
    // https://webpack.js.org/configuration/entry-context/#entry
    entry: './index.ts',
    
    // Путь, по которому вебпак создат директорию с билдом
    // https://webpack.js.org/configuration/output/
    output: {
      //  Название билда
      filename: 'bundle.js',
      // Путь, по которому создавать директорию с билдом
      path: path.resolve(__dirname, 'dist'),
    },
    
    
    resolve: {
      // Разширения файлов, который вебпак будет автоматически распозновать.
      // Для таких файлов не надо указывать расширение при импорте
      // https://webpack.js.org/configuration/resolve/#resolveextensions
      extensions: ['.js', '.ts'],
      
      // Алиасы для директорий в проекте. Ключ - алиас, значение - путь к директории
      // https://webpack.js.org/configuration/resolve/#resolvealias
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, './src/components'),
      },
    },
    
    // Настройки дев сервера.
    // https://webpack.js.org/configuration/dev-server/#devserver
    devServer: {
      port: 8000,
    },
    
    // Плагины для сборки. При добавлении плагина нужно обязательно создать экемпляр чере new.
    // https://webpack.js.org/configuration/plugins/#plugins
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html'),
        filename: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'bundle.css',
      }),
    ],
    
    /*
    * Правила для сборки проекта.
    * https://webpack.js.org/configuration/module/
    *
    * test - регулярное выражение с расширеним файлов, к которому нужно применять лоадеры
    * loader - ладер, который будет применяться к файлам
    * https://webpack.js.org/configuration/module/#rulelayer
    *
    * */
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: path.resolve(__dirname, 'src'),
        },
        {
          test: /\.s[ac]ss/,
          use: [
            isProd
              ? MiniCssExtractPlugin.loader
              : 'vue-style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
  });
};
