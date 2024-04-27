// Read - 

// Fetch all documents
db.inventory.find({}); // ----> SELECT * FROM inventory

db.inventory.find( { status: "D" } ); // ----> SELECT * FROM inventory WHERE status = "D"

db.inventory.find( { status: { $in: [ "A", "D" ] } } ); // ----> SELECT * FROM inventory WHERE status in ("A", "D")

db.inventory.find( { status: "A", qty: { $lt: 30 } } ); // ----> SELECT * FROM inventory WHERE status = "A" AND qty < 30

db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } ) // ----> SELECT * FROM inventory WHERE status = "A" OR qty < 30