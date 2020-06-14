import React from 'react';
import {shallow} from 'enzyme';
import SignIn from '../components/userLogin/Login'

describe('Login Component', () => {
    it('Login form render without any error', () => {
        expect(shallow(<SignIn />).find('#loginBody').exists()).toBe(true)
    })
});
it('Email renders successfully', () => {
    expect(shallow(<SignIn />).find('#email').length).toEqual(1)
});
it('Password renders successfully', () => {
    expect(shallow(<SignIn />).find('#password').length).toEqual(1)
});