import { AuthenticationRepository } from '../repositories/authentication';

export class AuthenticationRepositoryMock implements AuthenticationRepository {
  user_id: String | null;

  constructor() {
    this.user_id = null;
  }

  userID() {
    return this.user_id;
  }

  createUserEmailPassword(email: String, password: String) {}

  signInEmailPassword(email: String, password: String) {
    return '312434';
  }

  logout() {}
}
