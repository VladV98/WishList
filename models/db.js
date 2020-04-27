const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wishRepoDB', { useNewUrlParser: true, useUnifiedTopology: true });
require('./wish');