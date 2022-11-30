const db: dbType = {
    persons: [
        {
            id: '1',
            name: "Guest1",
            email: '321@mail.ru',
            password: "321",
            phone: '+7 (915) 987-31-58',
            orders: []
        }
    ],

    products: [
        {
    productId: 1,
    title: 'Роза',
    description: 'розовые розы',
    img: ['https://tsvet-dvorik.ru/d/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F_%D1%80%D0%BE%D0%B7%D0%B0_%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C.jpg'],
    count: 10,
    additionalParams: 
    {
        color: 'красный',
        flowers: ['роза'],
        equipment: ['ленточка'], // комплектация: что входит
        size: '2x2x2см',
        weight: '10'
    }
 
        }
    ]
    
}

interface dbType {
 persons: [UserType],
 products: [productsType]
}

interface UserType {
    id: string,
    name: string,
    email: string,
    password: string,
    phone: string,
    additionalPhone?: {
        phone: string
        describe: string
    }
    orders?: [orderType] | [] 
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
    count: number
    additionalParams: additionalParamsType

}

interface additionalParamsType {
    color: string
    flowers: string[]
    equipment: string[] // комплектация: что входит
    size: string
    weight: string
}


export { db } ;