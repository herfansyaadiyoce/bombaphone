const express = require("express");

/**
 * Router khusus FrontEnd
 * @param {express.Application} app
 */
module.exports = (app) => {
  app.get("/", (_, res) => res.render("index"));
  app.get("/checkout", (_, res) => res.render("checkout"));
  app.get("/dashboard", (_, res) => res.render("dashboard"));
  app.get("/detail_product", (_, res) => res.render("detail_product"));
  app.get("/keranjang", (_, res) => res.render("keranjang"));
  app.get("/login", (_, res) => res.render("login"));
  app.get("/products", (_, res) => res.render("products"));
  app.get("/register", (_, res) => res.render("register"));
  app.get("/wishlist", (_, res) => res.render("wishlist"));
};
