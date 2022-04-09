export const addFood = food => {
    return { type: "FOOD", payload: food }
}
export const addDrinks = drinks => {
    return { type: "DRINKS", payload: drinks }
}
export const addDesserts = desserts => {
    return { type: "DESSERTS", payload: desserts }
}

export const removeFromCart = id => {
    return { type: "DEL", payload: id }
}

export const decreaseCount = id => {
    return { type: "DEC", payload: id }
}

export const increaseCount = id => {
    return { type: "INC", payload: id }
}

export const newAdd = product => {
    return { type: "NEW", payload: product }
}

export const setSelect = select => {
    return { type: "SELECT", payload: select }
}

export const editProduct = edit => {
    return { type: "EDIT", payload: edit }
}