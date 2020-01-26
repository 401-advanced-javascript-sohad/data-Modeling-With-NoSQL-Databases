'use strict';

require('@code-fellows/supergoose');

const Categories = require('../../models/categories-model.js');

const category = new Categories();

describe(' Categories Testing ', () => {

    it('get category ', () => {

        let recNew = { name: 'test category' };

        return category.create(recNew)
            .then(record => {
                return category.get(record._id)
                    .then(catItem => {
                        Object.keys(recNew).forEach(key => {
                            expect(catItem[key]).toEqual(recNew[key]);
                        })
                    })
            })
            .catch(e => console.error('ERR', e));
    })

///////////////////////////////////////////////////////////////////////

    it(' create new category ', () => {

        let recNew = { name: 'test category' };
        return category.create(recNew)
            .then(record => {
                Object.keys(recNew).forEach(key => {
                    expect(record[key]).toEqual(recNew[key]);
                })
            }) 
            .catch(e => console.error('ERR', e));
    }); 


    ///////////////////////////////////////////////////////////////////////////


    it(' update category ', () => {
        let recNew = { name: 'test category' };
        return category.create(recNew)
            .then(record => {
                return category.update(record._id, record)
                    .then(catItem => {
                        Object.keys(recNew).forEach(key => {
                            expect(catItem[key]).toEqual(recNew[key]);
                        }) 
                    }) 
            }) 
            .catch(e => console.error('ERR', e));
    }); 
    
    //////////////////////////////////////////////////////////////////////////////


    it(' delete category ', () => {
        let recNew = { name: 'test category' };
        return category.create(recNew)
            .then(record => {
                return category.delete(record._id, record)
                    .then(catItem => {
                        Object.keys(recNew).forEach(key => {
                            expect(catItem[key]).toEqual(recNew[key]);
                        }) 
                    }) 
            }) 
            .catch(e => console.error('ERR', e));
    }); 

}) 