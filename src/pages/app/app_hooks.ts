import { useState, useEffect, useContext } from 'react';
import { AuthenticationStatus } from 'repositories/authentication';
import { RepositoryContext } from 'injector';

/**
 *  App Hooks
 */

const useAuthenticationStatus = () => {
  const { authentication } = useContext(RepositoryContext);
  const [status, setStatus] = useState<AuthenticationStatus>(
    AuthenticationStatus.Unauthenticated
  );

  useEffect(() => {
    const onChange = (newStatus: AuthenticationStatus) => {
      setStatus(newStatus);
    };

    authentication.subscribeStatus(onChange);

    return () => {
      authentication.unsubscribe(onChange);
    };
  });

  return status;
};

export { useAuthenticationStatus };
