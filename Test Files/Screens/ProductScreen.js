class ProductScreen{
  get Addcart(){
    return $('~Add To Cart button');
  }
  get IncreaseCount(){
    return $('//android.view.ViewGroup[@content-desc="counter plus button"]/android.widget.ImageView');
  }
  get GoToCart(){
    return $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView');
  }
}

export default new ProductScreen()