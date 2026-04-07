const express = require("express");

const app = express();
app.use(express.json());

let stores = [
    { id: 1, name: "Reliance Store", location: "Mysore" },
    { id: 2, name: "DMart", location: "Bangalore" }
];

// GET all stores
app.get("/stores", (req, res) => {
    res.status(200).json({
        success: true,
        data: stores
    });
});

// GET store by ID
app.get("/stores/:id", (req, res) => {
    const store = stores.find(s => s.id === parseInt(req.params.id));

    if (!store) {
        return res.status(404).json({ message: "Store not found" });
    }

    res.json(store);
});

// CREATE store
app.post("/stores", (req, res) => {
    const { name, location } = req.body;

    if (!name || !location) {
        return res.status(400).json({ message: "Name and location are required" });
    }

    const newStore = {
        id: stores.length ? stores[stores.length - 1].id + 1 : 1,
        name,
        location
    };

    stores.push(newStore);

    res.status(201).json(newStore);
});

// UPDATE store
app.put("/stores/:id", (req, res) => {
    const store = stores.find(s => s.id === parseInt(req.params.id));

    if (!store) {
        return res.status(404).json({ message: "Store not found" });
    }

    store.name = req.body.name || store.name;
    store.location = req.body.location || store.location;

    res.json(store);
});

// DELETE store
app.delete("/stores/:id", (req, res) => {
    const index = stores.findIndex(s => s.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: "Store not found" });
    }

    const deleted = stores.splice(index, 1);

    res.json({
        message: "Store deleted",
        data: deleted
    });
});

app.listen(3004, () => {
    console.log("Store Service running on port 3004");
});