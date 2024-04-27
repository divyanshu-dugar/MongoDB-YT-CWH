// Delete - Deleting a record/row/document from the database

// Deletes one document (1st occurence) 
db.inventory.deleteOne( { status: "D" } )

// Deletes all the data
db.inventory.deleteMany({})