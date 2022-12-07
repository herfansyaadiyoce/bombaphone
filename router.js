const express = require("express");

/**
 * @param {express.Application} app
 */
module.exports = (app) => {
  app.get("/", (req, res) => res.render("index"));
  app.get("/checkout", (req, res) => res.render("checkout"));
  app.get("/dashboard", (req, res) => res.render("dashboard"));
  app.get("/detail_product", (req, res) => res.render("detail_product"));
  app.get("/keranjang", (req, res) => res.render("keranjang"));
  app.get("/login", (req, res) => res.render("login"));
  app.get("/products", (req, res) => res.render("products"));
  app.get("/register", (req, res) => res.render("register"));
  app.get("/wishlist", (req, res) => res.render("wishlist"));
};
