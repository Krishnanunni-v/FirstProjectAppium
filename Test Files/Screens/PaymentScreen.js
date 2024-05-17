class PaymentScreen{
  get FullName(){
    return $('~Full Name* input field');
  }
  get CardNumber(){
    return $('~Card Number* input field');
  }
  get ExpDate(){
    return $('~Expiration Date* input field');
  }
  get SecurityCode(){
    return $('~Security Code* input field');
  }
  get ReviewOrderButton(){
    return $('~Review Order button');
  }
  async SetPaymentDetails(){
    await this.FullName.addValue('Abinav');
    await this.CardNumber.addValue('12345678910121');
    await this.ExpDate.addValue('02/25');
    await this.SecurityCode.addValue('956');
  }
}

export default new PaymentScreen()