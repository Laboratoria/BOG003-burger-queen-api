const mongoose = require('mongoose');
const Product = require('./models/Product');

// async function main() {
//     await mongoose.connect('mongodb://bq:secret@db:27017/bq?authSource=admin');
//     console.log("YOUR MOM")

//     const kittySchema = new mongoose.Schema({
//         name: String
//       });
    
//     const Kitten = mongoose.model('Kitten', kittySchema);
    
//     const silence = new Kitten({ name: 'Silence new' });
//     console.log(silence.name); // 'Silence'
    
//     await silence.save()
//   }

async function main() {
    await mongoose.connect('mongodb://bq:secret@db:27017/bq?authSource=admin');
    console.log("YOUR MOM")
    const product = await Product.findOne();
    console.log(product.name); // 'Silence'
}

main().catch(err => console.log(err));




// mongoose.connect('mongodb://bq:secret@db:27017/bq?authSource=admin').then(console.log("UR MOM")).catch((err) => {console.log(err)});