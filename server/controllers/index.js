let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('Home/index', { title: 'Home' });
  }

module.exports.displayAboutPage = (req, res, next) => {
    res.render('About/index', { title: 'About' });
  }

module.exports.displayProductsPage = (req, res, next) => {
    res.render('Products/index', { title: 'Products' });
  }

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services' });
  }

module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact' });
  }