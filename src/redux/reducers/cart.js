const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const items = {
                ...state.items,
                [action.payload.id] : !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }
            const allPizzas = [].concat.apply([], Object.values(items))
            const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0)

            return {
                ...state.items,
                items: items,
                totalCount: allPizzas.length,
                totalPrice: totalPrice
            }
        }

        default:
            return state
    }
}

export default cart;