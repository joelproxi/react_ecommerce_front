import {IProduct, IProductsData} from "./typeProducts";


export function assertIsProduct(product: unknown): asserts product is IProduct{
    if(!(typeof product === 'object') || product === null){
        throw new Error("product must contains content field");
    }

    if(!('id' in product) || typeof (product as any ).id !== 'number'){
        throw new Error("id must be into field product")
    }

    if(!('name' in product) || typeof (product as any ).name !== 'string'){
        throw new Error("name must be a type string")
    }

    if(!('description' in product) || typeof (product as any ).description !== 'string'){
        throw new Error("description must be a type string")
    }

    if(!('quantity' in product) || typeof (product as any ).quantity !== 'number'){
        throw new Error("Quantity must be a type string")
    }

    if(!('price' in product) || typeof (product as any ).price !== 'number'){
        throw new Error("Price must be a type number")
    }


}



export function assertIsProducts(productData: unknown): asserts productData is IProductsData{
    if(!(typeof productData === 'object') || productData === null || !('content' in productData)){
        throw new Error("product must contains content field");
    }

    const content = (productData as any).content;

    if(!Array.isArray(content)){
        throw new Error("content must be an array");
    }

    content.forEach(product => {
        assertIsProduct(product)
    })
}