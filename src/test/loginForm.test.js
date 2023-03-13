import GetLoginForm from '../route/login/loginForm';
import {render,screen,cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    redirect,
    Link
  } from "react-router-dom";

afterEach(() => {
    cleanup();
})

test('should render GetLoginForm component', () => {
    render(<Router><GetLoginForm/></Router>);
    const loginElement = screen.getByTestId('login-1');
    expect(loginElement).toBeInTheDocument();
} )

test('should render GetLoginForm component', () => {
    render(<Router><GetLoginForm/></Router>);
    const loginElement = screen.getByTestId('login-2');
    expect(loginElement).toBeInTheDocument();
    expect(loginElement).toHaveTextContent("UWConnect");
} )

test('should render GetLoginForm component', () => {
    render(<Router><GetLoginForm/></Router>);
    const loginElement = screen.getByTestId('login-3');
    expect(loginElement).toBeInTheDocument();
    expect(loginElement).toHaveTextContent("New User?");
} )

test('should render GetLoginForm component', () => {
    render(<Router><GetLoginForm/></Router>);
    const loginElement = screen.getByTestId('login-4');
    expect(loginElement).toBeInTheDocument();
    expect(loginElement.href).toBe("http://localhost/register");
} )

test('matches snapshot', () => {

    const tree = renderer.create(<Router><GetLoginForm/></Router>).toJSON();
    expect(tree).toMatchSnapshot();

} )
    
