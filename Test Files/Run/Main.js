import  HomeScreen  from "../Screens/HomeScreen.js"
import ProductScreen from '../Screens/ProductScreen.js';
import Cart from '../Screens/CartScreen.js'
import LoginScreen from '../Screens/LoginScreen.js'
import CheckOutScreen from "../Screens/CheckOutScreen.js";
import PaymentScreen from "../Screens/PaymentScreen.js"
import { expect, driver, $ } from "@wdio/globals";
describe(("Assignment"),()=>{
  it(("Lanch app and add a product to cart"),async()=>{
    await HomeScreen.ProductBag.click()
    await ProductScreen.Addcart.click()
  })
  it(("Scroll down and tap on any product from bottom of page"),async()=>{
    await driver.back()
    await HomeScreen.ScrollToBottom()
    await HomeScreen.ProductTShirt.click()
  })
  it(("Increase quantity of item to 2, in product page, and tap add to cart"),async()=>{
   await ProductScreen.IncreaseCount.click()
   await ProductScreen.Addcart.click()
  })
  it(("Go to cart"),async()=>{
    await ProductScreen.GoToCart.click()
    await Cart.ProceedCheckOut.click()
    await LoginScreen.SetLoginValues()   
    await LoginScreen.LoginButton.click()
   })
   it(("Add address"),async()=>{   
   await CheckOutScreen.SetAddress();
   await CheckOutScreen.ToPaymentButton.click();
   })
   it(("Enter card details in payment method"),async()=>{
    await PaymentScreen.SetPaymentDetails();
    await PaymentScreen.ReviewOrderButton.click()
   })
   it(("Place Order and return Home"),async()=>{
    await CheckOutScreen.PlaceOrder.click();
    await expect(CheckOutScreen.CompleteCheckOut).toBeDisplayed()
    await CheckOutScreen.ContinueShopping.click();
    await expect(HomeScreen.HomeTitle).toBeDisplayed()
   })
})