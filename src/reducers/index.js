const initialState = {
    foods: [
        {
            id: 1, name: "Salad", kind: "Shepherds salad", price: 12.90, image: "https://cdn.yemek.com/mnresize/940/940/uploads/2021/07/coban-salata-one-cikan.jpg"
        },
        {
            id: 2, name: "Pasta", kind: "Creamy Pasta", price: 28.90, image: "https://i.nefisyemektarifleri.com/2018/07/09/nefis-kremali-makarna-2.jpg"
        },
        {
            id: 3, name: "Chicken", kind: "Grilled Chicken", price: 34.90, image: "https://www.unileverfoodsolutions.com.tr/dam/global-ufs/mcos/TURKEY/calcmenu/recipes/TR-recipes/chicken-&-other-poultry-dishes/cajun-ve-krema-marineli-tavuk-izgara/main-header.jpg"
        },
        {
            id: 4, name: "Hamburger", kind: "Chicken Burger", price: 21.75, image: "https://www.burgerking.com.tr/cmsfiles/products/king-chicken-1.png?v=177"
        }
    ],

    drinks: [
        {
            id: 5, name: "Coke", kind: "Zero", price: 4.90, image: "https://cdn.cimri.io/market/260x260/coca-cola-24lu-330-ml-zero-kutu-kola-_284972.jpg"
        },
        {
            id: 6, name: "Ice Tea", kind: "Peach", price: 4.90, image: "https://cdnsta.avansas.com/mnresize/900/-/urun/53512/lipton-ice-tea-seftali-330-ml-6-li-paket-zoom-1.jpg"
        },
        {
            id: 7, name: "Ice Tea", kind: "Mango", price: 4.90, image: "https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30051805/30051805_0_MC/8796620095538_1600421573170.jpg"
        },
        {
            id: 8, name: "Fanta", kind: "Orange", price: 4.90, image: "https://sc04.alicdn.com/kf/H4125caef052f48e18e934053efb7ea78J.jpg"
        }
    ],

    desserts: [
        {
            id: 9, name: "Pudding", kind: "Milky Desserts", price: 13.90, image: "https://i.nefisyemektarifleri.com/2021/10/15/en-kolay-muhallebi-1.jpg"
        },
        {
            id: 10, name: "Künefe", kind: "Sherbet Sweets", price: 17.50, image: "https://imgrosetta.mynet.com.tr/file/11674342/11674342-728xauto.jpg"
        },
        {
            id: 11, name: "Baklava", kind: "Sherbet Sweets", price: 19.90, image: "https://www.livashop.com/Uploads/UrunResimleri/buyuk/fistikli-baklava-87a8.jpg"
        },
        {
            id: 12, name: "Profiteroles", kind: "Milky Desserts", price: 9.75, image: "https://cdn.yemek.com/mnresize/940/940/uploads/2014/11/profiterol-yemekcom2.jpg"
        }
    ],

    cart: [],

    select: "",

    cargo: 12.99
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FOOD":
            return {
                ...state,
                cart: state.cart.find(cartItem => cartItem.id === action.payload.id)
                    ? state.cart.map(cartItem =>
                        cartItem.id === action.payload.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
                    )
                    : [...state.cart, { ...action.payload, count: 1 }]
            }

        case "DRINKS":
            return {
                ...state,
                cart: state.cart.find(cartItem => cartItem.id === action.payload.id)
                    ? state.cart.map(cartItem =>
                        cartItem.id === action.payload.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
                    )
                    : [...state.cart, { ...action.payload, count: 1 }]
            }

        case "DESSERTS":
            return {
                ...state,
                cart: state.cart.find(cartItem => cartItem.id === action.payload.id)
                    ? state.cart.map(cartItem =>
                        cartItem.id === action.payload.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
                    )
                    : [...state.cart, { ...action.payload, count: 1 }]
            }

        case "DEL":
            return {
                ...state, cart: state.cart.filter(item => item.id !== action.payload)
            }

        case "INC":
            return {
                ...state, cart: state.cart.map((cartItem) => cartItem.id === action.payload ? { ...cartItem, count: cartItem.count + 1 } : cartItem)
            };

        case "DEC":
            return {
                ...state, cart: state.cart.map((cartItem) => cartItem.id === action.payload ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 } : cartItem)
            }

        case "NEW":
            if (state.select === "foods") {
                return {
                    ...state, foods: [...state.foods, action.payload]
                }
            } else if (state.select === "drinks") {
                return {
                    ...state, drinks: [...state.drinks, action.payload]
                }
            } else if (state.select === "desserts") {
                return {
                    ...state, desserts: [...state.desserts, action.payload]
                }
            } else {
                return state;
            };

        case "SELECT":
            return {
                ...state, select: action.payload
            }

        case "EDIT":
            if (state.select === "foods") {
                return {
                    ...state, foods: state.foods.filter(food => food.id === action.payload.id ? console.log(state.foods):console.log(state.foods))
                }
            } else {
                console.log("hata");
            }

        default:
            return state;
    }
}