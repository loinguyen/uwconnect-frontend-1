import App from './App.js';
import {render,screen,cleanup} from '@testing-library/react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    redirect,
    Link
  } from "react-router-dom";

  import { Provider } from 'react-redux'
  import { store } from './redux/store'
  
  // This is to create ReduxProvider for mock
  const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
  )

afterEach(() => {
    cleanup();
})

// This is due to Jest issue of current version
// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(), // deprecated
          removeListener: jest.fn(), // deprecated
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
    });
})

test('should render GetLoginForm component', () => {
    render(<ReduxProvider reduxStore={store}><Router><App/></Router></ReduxProvider>);
    const loginElement = screen.getByTestId('App-1');
    expect(loginElement).toBeInTheDocument();
} )
