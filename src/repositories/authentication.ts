export interface AuthenticationRepository {
  /**
   * Returns the ID of logged user. Returns null if no user is logged.
   */
  userID: () => String | null;

  /**
   * Creates user using email and password
   */
  createUserEmailPassword: (email: String, password: String) => void;

  /**
   * Sign in user using email and password
   */
  signInEmailPassword: (email: String, password: String) => String | null;

  /**
   * Sign out logged user
   */
  logout: () => void;
}
