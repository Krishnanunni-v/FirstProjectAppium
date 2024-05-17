class HomeScreen{
   get ProductBag(){
    return $('(//android.view.ViewGroup[@content-desc="store item"])[1]/android.view.ViewGroup[1]/android.widget.ImageView');
   }
   get ProductTShirt(){
    return $('(//android.view.ViewGroup[@content-desc="store item"])[3]/android.view.ViewGroup[1]/android.widget.ImageView');
   }
   get HomeTitle(){
    return $('//android.widget.TextView[@text="Products"]');
   }
   async ScrollToBottom(){
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy.")');
   }
}

export default new HomeScreen()