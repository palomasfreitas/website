// Optional: configure or set up a testing framework before each test.
// // If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`
// import * as firebase from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

jest.mock('firebase/app');
jest.mock('firebase/firestore');
jest.mock('firebase/auth');

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';