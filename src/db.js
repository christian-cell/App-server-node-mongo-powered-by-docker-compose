const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/mydatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(db=> console.log('servidor escuchando en ' , db.connection.host))
.catch(err => console.error(err));