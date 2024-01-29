const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const notificationSchema = new Schema({
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, enum: ['unread', 'read'], default: 'unread' },
});

const Notification = model('Notification', notificationSchema);

module.exports = Notification;
