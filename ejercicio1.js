
class ProductManager{
    constructor(){
    this.products = [];}

getProducts(){
        return this.products;
}

addProduct(newProd){
    const keysValidator = ["id","title","description","price","thumbnail","code","stock"];
    

    const prod = this.products.find(product => product.code === newProd.code)
    if (prod) {
        return "Product already exists with code "
    }
    
    if (this.products.length === 0) {
        this.products.push( {id: 1, ...newProd } )
    } else {
        this.products.push( {id: this.products[this.products.length-1].id + 1  , ...newProd } )
    }
    
    const producto =this.products.forEach( (producto) =>console.log(Object.keys(producto)));
    console.log(keysValidator)
    console.log(producto);


    const isEqual = (keysValidator.length === producto.length) &&
            keysValidator.every((value, index) => value === producto[index])

    console.log(isEqual);
    
    


    // console.log(Object.keys(keysValidator))
    // // console.log(Object.keys(products))
    // console.log(this.products);
}



getProductById(id){
    const product = this.products.find(x => x.id === id)

    if(!product){
    console.log("Id not found");
    }else{
        return;
    }
        return product
    }
}

const manegeProducts = new ProductManager()

console.log(manegeProducts.addProduct({
   title: "producto prueba2",
   description: "Este es un producto prueba2",
   price:200,
   thumbnail: "Sin imagen",
   code: "002",
   stock: 125
}));
console.log(manegeProducts.getProducts());