const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require("@babel/register");

const isDevelop = !process.argv.includes('production');


const config = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /(?<!\.test)\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src/html/'),
        use: ['handlebars-loader']
      },
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }),
    new CopyWebpackPlugin([
      { from: './src/copy', to: './' }
    ]),
    new HtmlWebpackPlugin({
      title: 'Главная',
      filename: `index.html`,
      template: path.resolve(__dirname, 'src/html/index.html'),
    }),
    new HtmlWebpackPlugin({
      title: 'О нас',
      filename: `about.html`,
      template: path.resolve(__dirname, 'src/html/about.html'),
    }),
    new HtmlWebpackPlugin({
      title: 'Вопросы и ответы',
      filename: `faq.html`,
      template: path.resolve(__dirname, 'src/html/faq.html'),
    }),
    new HtmlWebpackPlugin({
      title: 'Контакты',
      filename: `contacts.html`,
      template: path.resolve(__dirname, 'src/html/contacts.html'),
    }),
    new HtmlWebpackPlugin({
      title: 'Каталог',
      filename: `catalog.html`,
      template: path.resolve(__dirname, 'src/html/catalog.html'),
      categories: {
        main: [
          { title: 'new in', link: '#', active: true },
          { title: 'пиджаки', link: '#' },
          { title: 'рубашки и блузы', link: '#' },
          { title: 'платья', link: '#' },
          { title: 'топы и футболки', link: '#' },
          { title: 'брюки', link: '#' },
          { title: 'шорты', link: '#' },
          { title: 'юбки', link: '#' },
          { title: 'комплекты', link: '#' },
          { title: 'верхняя одежда', link: '#' },
          { title: 'джинсы', link: '#' },
          { title: 'джемперы и кардиганы', link: '#' },
          { title: 'комбинезоны', link: '#' },
        ],
        sale: [
          { title: 'sale: new in', link: '#' },
          { title: 'sale: пиджаки', link: '#' },
          { title: 'sale: рубашки и блузы', link: '#' },
          { title: 'sale: платья', link: '#' },
          { title: 'sale: топы и футболки', link: '#' },
          { title: 'sale: брюки', link: '#' },
          { title: 'sale: шорты', link: '#' },
          { title: 'sale: юбки', link: '#' },
          { title: 'sale: комплекты', link: '#' },
          { title: 'sale: верхняя одежда', link: '#' },
          { title: 'sale: джинсы', link: '#' },
          { title: 'sale: джемперы и кардиганы', link: '#' },
          { title: 'sale: комбинезоны', link: '#' },
        ]
      },
      filters: [
        {
          filterId: 'size', title: 'Размер', horizontal: true, content: [
            { contentId: 'size-1', value: 'XS', link: '#' },
            { contentId: 'size-2', value: 'S', link: '#' },
            { contentId: 'size-3', value: 'M', link: '#' },
            { contentId: 'size-4', value: 'L', link: '#' },
          ]
        },
        {
          filterId: 'price', title: 'Цена', content: [
            { contentId: 'price-1', value: '₽1000 – ₽2000', link: '#' },
            { contentId: 'price-2', value: '₽2000 – ₽4000', link: '#' },
            { contentId: 'price-3', value: '₽4000 – ₽6000', link: '#' },
            { contentId: 'price-4', value: '₽6000 – ₽10000', link: '#' },
          ]
        },
      ],
      sorting: {
        default: 'новинки',
        by: [
          { label: 'цены ↓', value: 'low_to_high' },
          { label: 'цены ↑', value: 'high_to_low' },
          { label: 'новинки', value: 'newest' },
        ]
      },

      products: new Array(10).fill('').map(() =>
        ({
          productId: Math.random(),
          link: "/product",
          imageSrc: "//cdn.shopify.com/s/files/1/0037/8925/8841/products/S45-19172-STL-1146_800x.jpg?v=1566340776",
          imageHoverSrc: "//cdn.shopify.com/s/files/1/0037/8925/8841/products/S45-19172-STL-1152_800x.jpg?v=1566340776",
          badge: "new",
          quantity: 1,
          sizes: [
            { sizeId: Math.random(), size: 'M' },
            { sizeId: Math.random(), size: 'L' },
          ],
          price: 3000,
          title: "STELLA BUTTON DOWN MIDI DRESS",
          materials: [
            {
              materialId: Math.random(),
              bgImage: '//cdn.shopify.com/s/files/1/0037/8925/8841/files/STELLA.png?22384',
              image: '//cdn.shopify.com/s/files/1/0037/8925/8841/products/S45-19172-STL-1152_800x.jpg?v=1566340776', active: true
            }
          ]
        })
      )
    }),
    new HtmlWebpackPlugin({
      title: 'Продукт',
      filename: `product.html`,
      template: path.resolve(__dirname, 'src/html/product.html'),

      product: {
        productId: Math.random(),
        images: [
          { imageId: 1, image: '//cdn.shopify.com/s/files/1/0037/8925/8841/products/190114_Sir_SH04_0076_bf4eef4a-2cdd-4816-8710-01ba963a4566_1440x.jpg?v=1560740808' },
          { imageId: 2, image: '//cdn.shopify.com/s/files/1/0037/8925/8841/products/190114_Sir_SH04_0085_4faf303f-c314-4148-aee1-22f4ba4c3d47_1440x.jpg?v=1560740808' },
          { imageId: 3, image: '//cdn.shopify.com/s/files/1/0037/8925/8841/products/ulura_2195a993-5d75-49aa-a9f5-b4291bb283b7_1440x.jpg?v=1560740808' },
          { imageId: 4, image: '//cdn.shopify.com/s/files/1/0037/8925/8841/products/190114_Sir_SH04_0091_da38f13f-23ff-48e8-8405-b8868f23321e_1440x.jpg?v=1560740808' },
          { imageId: 5, image: '//cdn.shopify.com/s/files/1/0037/8925/8841/products/S52-19052-STL-0867_1440x.jpg?v=1560740808' },
          { imageId: 6, image: '//cdn.shopify.com/s/files/1/0037/8925/8841/products/S52-19052-STL-0861_1440x.jpg?v=1560740808' },
          { imageId: 7, image: '//cdn.shopify.com/s/files/1/0037/8925/8841/products/lacearms_adb8e8ef-020b-4c24-9a81-ee6e518180ed_1440x.jpg?v=1560740808' },
        ],
        isLow: true,
        sizes: [
          { sizeId: Math.random(), size: 'M' },
          { sizeId: Math.random(), size: 'L' },
        ],
        price: 3000,
        title: "STELLA BUTTON DOWN MIDI DRESS",
        colors: [
          {
            colorId: Math.random(),
            bgImage: '//cdn.shopify.com/s/files/1/0037/8925/8841/files/MOMOKO.png?22384',
            title: "MOLOKO",
            active: true
          }
        ]
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Lookbook',
      filename: `lookbook.html`,
      template: path.resolve(__dirname, 'src/html/lookbook.html'),
    }),
  ].concat(!isDevelop ? [new CleanWebpackPlugin()] : []),
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  watch: false,
};

module.exports = config;