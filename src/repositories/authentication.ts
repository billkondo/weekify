export interface AuthenticationRepository {
  authenticationStatus: AuthenticationStatus;

  /**
   *  Returns the ID of logged user. Returns null if no user is logged.
   */
  userID: () => String | null;

  createUserEmailPassword: (email: String, password: String) => Promise<void>;

  signInEmailPassword: (
    email: String,
    password: String
  ) => Promise<String | null>;

  /**
   *  Sign out logged user
   */
  logout: () => Promise<void>;

  /**
   *  Subscribe to changes in [authenticationStatus]
   */
  subscribeStatus: (fn: Function) => void;

  /**
   *  Unsubscribe to changes in [authenticationStatus]
   */
  unsubscribe: (fn: Function) => void;
}

export enum AuthenticationStatus {
  Unauthenticated,
  Authenticating,
  Authenticated,
}
