const service = require("../services/inventory.service");

exports.create = async (req, res, next) => {
    try {
        const data = await service.createItem(req.body);
        res.status(201).json(data);
    } catch (err) {
        next(err);
    }
};

exports.getAll = async (req, res, next) => {
    try {
        const data = await service.getAllItems();
        res.json(data);
    } catch (err) {
        next(err);
    }
};

exports.getOne = async (req, res, next) => {
    try {
        const data = await service.getItemById(req.params.id);
        if (!data) return res.status(404).json({ message: "Not found" });
        res.json(data);
    } catch (err) {
        next(err);
    }
};

exports.update = async (req, res, next) => {
    try {
        const data = await service.updateItem(req.params.id, req.body);
        if (!data) return res.status(404).json({ message: "Not found" });
        res.json(data);
    } catch (err) {
        next(err);
    }
};

exports.remove = async (req, res, next) => {
    try {
        const data = await service.deleteItem(req.params.id);
        if (!data) return res.status(404).json({ message: "Not found" });
        res.json({ message: "Deleted successfully" });
    } catch (err) {
        next(err);
    }
};