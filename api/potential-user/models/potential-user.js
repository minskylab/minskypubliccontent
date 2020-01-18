"use strict";

const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TELEGRAM_BOT_TOKEN;
const minkyChatID = process.env.MINSKY_CHAT_ID;

const bot = new TelegramBot(token, { polling: true });

/**
 * Lifecycle callbacks for the `potential-user` model.
 */

module.exports = {
  // Before saving a value.
  // Fired before an `insert` or `update` query.
  // beforeSave: async (model, attrs, options) => {},

  // After saving a value.
  // Fired after an `insert` or `update` query.
  afterSave: async (model, response, options) => {
    const m = model.attributes || {};
    const newUserEmail = m.email || "u_u";

    console.log("New Potential User: " + newUserEmail);
    strapi.plugins["email"].services.email
      .send({
        to: [
          "bregy.malpartida@utec.edu.pe",
          "maria.noriega@utec.edu.pe",
          "antonio.toche@gmail.com"
        ],
        from: "hello@minsky.cc",
        replyTo: "no-reply@minsky.cc",
        subject: "New Potential User",
        html: "Hello world!, we're a new potential user: " + newUserEmail
      })
      .then(r => console.log(r))
      .catch(err => console.log(err));
    bot.sendMessage(minkyChatID, "New Potential User: " + newUserEmail);
  }

  // Before fetching a value.
  // Fired before a `fetch` operation.
  // beforeFetch: async (model, columns, options) => {},

  // After fetching a value.
  // Fired after a `fetch` operation.
  // afterFetch: async (model, response, options) => {},

  // Before fetching all values.
  // Fired before a `fetchAll` operation.
  // beforeFetchAll: async (model, columns, options) => {},

  // After fetching all values.
  // Fired after a `fetchAll` operation.
  // afterFetchAll: async (model, response, options) => {},

  // Before creating a value.
  // Fired before an `insert` query.
  // beforeCreate: async (model, attrs, options) => {},

  // After creating a value.
  // Fired after an `insert` query.
  // afterCreate: async (model, attrs, options) => {},

  // Before updating a value.
  // Fired before an `update` query.
  // beforeUpdate: async (model, attrs, options) => {},

  // After updating a value.
  // Fired after an `update` query.
  // afterUpdate: async (model, attrs, options) => {},

  // Before destroying a value.
  // Fired before a `delete` query.
  // beforeDestroy: async (model, attrs, options) => {},

  // After destroying a value.
  // Fired after a `delete` query.
  // afterDestroy: async (model, attrs, options) => {}
};
