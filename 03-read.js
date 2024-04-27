// Read - 

// Fetch all documents
db.inventory.find({});

db.inventory.find({qty:400});

db.inventory.find({tags:{$in: ["cotton","zinc"]}});