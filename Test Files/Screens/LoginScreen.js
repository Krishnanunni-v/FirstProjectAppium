class LoginScreen{
  get UserName(){
    return $('~Username input field');
  }
  get Password(){
    return $('~Password input field');
  }
  get LoginButton(){
    return $('~Login button');
  }
  async SetLoginValues(){
    await this.UserName.addValue('bob@example.com');
    await this.Password.addValue('10203040')
    
  }
}

export default new LoginScreen()