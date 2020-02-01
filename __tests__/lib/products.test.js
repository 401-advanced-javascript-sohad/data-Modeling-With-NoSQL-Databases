'use strict';

require('@code-fellows/supergoose');

const Products = require('../../models/products-model.js');

const product = new Products();

describe(' Categories Testing ', () => {

    it('get the product ', () => {
        let newRec = { name:"clothes" ,price: 14 ,made :"jordan" };

        return product.create(newRec)
            .then(record => {
                return product.get(record._id)
                    .then(proItem => {
                        Object.keys(newRec).forEach(key => {
                            expect(proItem[key]).toEqual(newRec[key]);
                        }) 
                    }) 
            }) 
            .catch(e => console.error('ERR', e));
    }) 

    /////////////////////////////////////////////////////////////////////////////////////


    it('create product ', () => {
        let newRec = { name:"clothes" ,price: 14 ,made :"jordan" };
        return product.create(newRec)
            .then(record => {
                Object.keys(newRec).forEach(key => {
                    expect(record[key]).toEqual(newRec[key]);
                }) 
            })
            .catch(e => console.error('ERR', e));
    }); 

    ////////////////////////////////////////////////////////////////////////////////////////


    it('update product ', () => {

        let newRec = { name:"clothes" ,price: 14 ,made :"jordan" };
        return product.create(newRec)
            .then(record => {
                return product.update(record._id, record)
                    .then(proItem => {
                        Object.keys(newRec).forEach(key => {
                            expect(proItem[key]).toEqual(newRec[key]);
                        }) 
                    }) 
            }) 
            .catch(e => console.error('ERR', e));
    }); 
    
    //////////////////////////////////////////////////////////////////////////////////////////


    it('delete product ', () => {
        let newRec = { name:"clothes" ,price: 14 ,made :"jordan" };
        return product.create(newRec)
            .then(record => {
                return product.delete(record._id, record)
                    .then(proItem => {
                        Object.keys(newRec).forEach(key => {
                            expect(proItem[key]).toEqual(newRec[key]);
                        }) 
                    }) 
            }) 
            .catch(e => console.error('ERR', e));
    }); 

})