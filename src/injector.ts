import { createContext } from 'react';
import { AuthenticationRepository } from 'repositories/authentication';
import { AuthenticationRepositoryMock } from 'mocks/authentication';

/**
 *  This file is responsible for setting app dependencies acording to environment [test, development, production].
 */

interface Repository {
  authentication: AuthenticationRepository;
}

const repositoryDev: Repository = {
  authentication: new AuthenticationRepositoryMock(),
};

export const RepositoryContext = createContext<Repository>(repositoryDev);

export const repository = repositoryDev;

export const RepositoryProvider = RepositoryContext.Provider;
