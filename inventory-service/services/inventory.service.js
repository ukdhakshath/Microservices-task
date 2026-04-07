const Inventory = require("../models/inventory.model");

exports.createItem = async (data) => {
    return await Inventory.create(data);
};

exports.getAllItems = async () => {
    return await Inventory.find();
};

exports.getItemById = async (id) => {
    return await Inventory.findById(id);
};

exports.updateItem = async (id, data) => {
    return await Inventory.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteItem = async (id) => {
    return await Inventory.findByIdAndDelete(id);
};