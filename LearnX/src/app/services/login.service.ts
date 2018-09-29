import { Subject } from 'rxjs';

export class LoginService {

  showLogin = false;
  showLoginSubject = new Subject();

  onShowLogin() {
    this.showLogin = !this.showLogin;
    this.showLoginSubject.next(this.showLogin);
  }

  getOnShowLogin() {
    return this.showLogin;
  }
}
