import renderer from 'react-test-renderer'
import {render,screen,cleanup} from '@testing-library/react'
import GetSignupForm from '../route/signup/signupForm';
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
    render(<Router><GetSignupForm/></Router>);
    const signupElement = screen.getByTestId('signup-1');
    expect(signupElement).toBeInTheDocument();
} )

test('should render GetLoginForm component', () => {
    render(<Router><GetSignupForm/></Router>);
    const signupElement = screen.getByTestId('signup-2');
    expect(signupElement).toBeInTheDocument();
    expect(signupElement).toHaveTextContent("Already have an account?");
} )

test('should render GetLoginForm component', () => {
    render(<Router><GetSignupForm/></Router>);
    const signupElement = screen.getByTestId('signup-3');
    expect(signupElement).toBeInTheDocument();
    expect(signupElement.href).toBe("http://localhost/login");
} )

test('matches snapshot', () => {

    const tree = renderer.create(<Router><GetSignupForm/></Router>).toJSON();
    expect(tree).toMatchSnapshot();

} )