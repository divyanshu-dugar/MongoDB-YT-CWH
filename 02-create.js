// Inserting one document/row to the inventory table/collection
db.inventory.insertOne(
    { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
)

// Inserting multiple documents/rows to the inventory table/collection
db.inventory.insertMany(
[{ item: "canvas1", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } },
{ item: "canvas2", qty: 200, tags: ["silk"], size: { h: 38, w: 35.5, uom: "cm" } },
{ item: "canvas3", qty: 300, tags: ["zinc"], size: { h: 8, w: 35.5, uom: "cm" } },
{ item: "canvas4", qty: 400, tags: ["alu"], size: { h: 28, w: 35.5, uom: "cm" } },
{ item: "canvas5", qty: 500, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }]
)