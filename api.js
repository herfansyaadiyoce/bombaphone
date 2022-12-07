const express = require("express");

/**
 * Router khusus BackEnd
 * @param {express.Application} app
 */
module.exports = (app) => {
  app.get("/api/list_products", (req, res) => {
    return res.json({});
  });
};
