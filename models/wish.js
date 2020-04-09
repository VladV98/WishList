//working with files
//fs - file system;

const fs = require('fs');
const path = require('path');

module.exports = class Wish {
    constructor(wishTitle){
        this.title = wishTitle;
    }

    saveWish() {
        //path to the product.json file
        const dataPath = path.join(path.dirname(process.mainModule.filename),
        'data',
        'wish.json'        
        );
        fs.readFile(dataPath, (error, fileContent) => {
            let items = [];
            if(!error){
                items = JSON.parse(fileContent);
            }
            items.push(this);

            //saving products array in json format to the file
            fs.writeFile(dataPath, JSON.stringify(items), (error) => {
                console.log(error);
            });

        });
        //before we save data to the file, we need to read it first

    }
    //to read the products.json file content
    static fetchAllWishes(callBack){
        const dataPath = path.join(path.dirname(process.mainModule.filename),
        'data',
        'wish.json'        
        );

        fs.readFile(dataPath, (error, fileContent) => {
            //in case of  error while opening the file
            if(error){
                return callBack([]);
            }
            callBack(JSON.parse(fileContent));
        });
    }
}