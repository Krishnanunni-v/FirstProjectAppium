class CheckOutScreen{
  get FullName(){
    return $('~Full Name* input field');
  }
  get AddressLine1(){
    return $('~Address Line 1* input field');
  }
  get AddressLine2(){
    return $('~Address Line 2 input field');
  }
  get City(){
    return $('~City* input field');
  }
  get State(){
    return $('~State/Region input field');
  }
  get ZipCode(){
    return $('~Zip Code* input field');
  }
  get Country(){
    return $('~Country* input field');
  }
  get ToPaymentButton(){
    return $('//android.widget.TextView[@text="To Payment"]');
  }
  get PlaceOrder(){
    return $('~Place Order button');
  }
  get CompleteCheckOut(){
    return $('//android.widget.TextView[@text="Checkout Complete"]');
  }
  get ContinueShopping(){
    return $('~Continue Shopping button');
  }

  async SetAddress(){
   await this.FullName.addValue('Abinav');
  await  this.AddressLine1.addValue('Punjab');
   await this.AddressLine2.addValue('UP');
   await this.City.addValue('Moga');
   await this.State.addValue('Punjab');
   await this.ZipCode.addValue('123456');
   await this.Country.addValue('India');
    
  }

}

export default new CheckOutScreen()