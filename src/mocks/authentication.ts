import {
  AuthenticationRepository,
  AuthenticationStatus,
} from '../repositories/authentication';

export class AuthenticationRepositoryMock implements AuthenticationRepository {
  user_id: String | null;
  authenticationStatus: AuthenticationStatus;
  handlers: Array<Function>;

  constructor() {
    this.user_id = null;
    this.authenticationStatus = AuthenticationStatus.Unauthenticated;
    this.handlers = [];
  }

  userID() {
    return this.user_id;
  }

  async createUserEmailPassword(email: String, password: String) {}

  async signInEmailPassword(email: String, password: String) {
    return '12345';
  }

  async logout() {}

  subscribeStatus(fn: Function) {
    this.handlers.push(fn);
  }

  unsubscribe(fn: Function) {
    this.handlers = this.handlers.filter((f) => f !== fn);
  }
}
