import App from './App.js';
import {render,screen,cleanup} from '@testing-library/react'

afterEach(() => {
    cleanup();
})

test('should render GetLoginForm component', () => {
    render(<App/>);
    const loginElement = screen.getByTestId('App-1');
    expect(loginElement).toBeInTheDocument();
} )
