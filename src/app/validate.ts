export class Validate {
  email(_email: string) {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = pattern.test(_email);
    // console.log('validate email:', _email, result);

    return result;
  }
  // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
  password(_password: string) {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
    let result = pattern.test(_password);
    // console.log('validatePassword:', _password, result);
    return true;
  }
}
