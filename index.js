'use strict';

const mongoose = require('mongoose');

const Categories = require('./models/categories-schema.js');

const Products = require('./models/products-schema.js');

const MONGOOSE_URI = 'mongodb://localhost:27017/noSqlLab';

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });

