
db.inventory.find().limit(1) // This will return the first document in the collection

db.inventory.find().skip(1) // This will skip the first document in the collection

db.inventory.find().sort({qty:1}) // This will sort the documents by quantity in ascending order
db.inventory.find().sort({qty:-1}) // This will sort the documents by quantity in descending order

.skip() // We use this in achieveing Pagination
// Example
// 8 blogs in one page

no = 8
db.blogs.find().skip((pageNo - 1)*no).limit(no);
pageno = 1 // db.blogs.find().skip(0).limit(8);
pageno = 2 // db.blogs.find().skip(8).limit(8);