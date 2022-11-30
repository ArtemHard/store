const db = {
    persons: [
        {
            
        }
    ],
    products: [

    ]
    
}

interface dbType {
 person: [UserType],
 products: []
}

interface UserType {
    id: string,
    name: string,
    email: string,
    password: string,
    orders?: [orderType]
}

interface orderType {
    orderNumber: number,
    position: [orderPositionType],
    price: number
}

interface orderPositionType {
    productId: number;
    count: number;
    price: number;
}

interface productsType {
    productId: number,
    title: string,
    description: string,
    img: string[]

}