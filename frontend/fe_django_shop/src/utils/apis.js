//const apiHost = 'http://localhost:8080/api'
const apiHost = 'https://jhong-demo-shop-mobile.herokuapp.com'
//const apiHost = 'http://127.0.0.1:8000'
//const apiHost = 'http://localhost:8000'

const AccountsApis = {
    LoginUrl: apiHost + '/login/',
    LogoutUrl: apiHost + '/logout/',
    RegisterUrl: apiHost + '/register/',
    UserUrl: apiHost + '/user/',
}

const ProductsApis = {
    IndexUrl: apiHost + '/index/',
    ShopUrl: apiHost + '/product/',
    DetailUrl: apiHost + '/product/#{id}/'
}

const OrderApis = {
    TotalOrderDetailUrl: apiHost + '/order/#{id}/',
    TotalOrderUrl: apiHost + '/order/',
    CartOrderlUrl: apiHost + '/cart/'
}

export {
    AccountsApis,
    ProductsApis,
    OrderApis
}