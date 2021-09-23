const checkStorage = () => localStorage.getItem('cart');
const updateStorage = cart => localStorage.setItem('cart', JSON.stringify(cart));

const addToLocalStorage = key => {
    const exist = checkStorage();

    let shoppingCart = {};
    if (!exist) {
        shoppingCart[key] = 1;
    }
    else {
        shoppingCart = JSON.parse(exist);
        if (shoppingCart[key]) {
            const newCount = shoppingCart[key] + 1;
            shoppingCart[key] = newCount;
        }
        else {
            shoppingCart[key] = 1;
        }
    }
    updateStorage(shoppingCart);
}

const removeCart = key => {
    const exist = checkStorage();
    if (!exist) {

    }
    else {
        const shoppingCart = JSON.parse(exist);
        delete shoppingCart[key];
        updateStorage(shoppingCart)
    }
}


export { addToLocalStorage, removeCart }