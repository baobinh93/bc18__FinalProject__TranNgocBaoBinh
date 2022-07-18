export class localStorageService {
  setUserInfo(_userInfo: Object) {
    return localStorage.setItem('USERINFO', JSON.stringify(_userInfo));
  }
  getUserInfo() {
    const dataString = localStorage.getItem('USERINFO');
    return !dataString ? null : JSON.parse(dataString);
  }
  deleteUserInfo() {
    return localStorage.clear();
  }
}
