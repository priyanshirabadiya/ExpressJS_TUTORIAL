class MESSAGE {
    ADD_NEW_PRODUCT = "new product added..."
    ALREDY_EXIST_PRODUCT = "Product already exist..."
    ALREDY_EXIST_USER = "User already exist log in to continue ..."
    INTERNAL_SERVER_ERROR = "Internal server error..."
    USER_REGISTER = "User added succesfully..."
    NOT_FOUND = "User not found..."
    INCORRECT_PASS = "Email or password is incorrect..."
    USER_LOGIN = "User login success..."
    UPDATED_USER = "User updated successfully..."
    UPDATED_CART = "cart updated successfully..."
    ALREADY_INCART = "Item is already in cart..."
    ADDED_TOCART = "Item is added to cart..."
    CART_NOT_FOUND = "Cart not found or you do not have permission to update this cart."
    DELETE_CART = "Item is removed from cart..."
    EMPTY_CART = "Your cart is empty..."
    ORDER_PLACED = "Order placed..."
    ORDERID_REQ = "Order ID is required."
    ORDER_NOT_FOUND = "Order not found..."
    ORDER_CANCEL = "Your order has been cancelled..."
}

module.exports = new MESSAGE();