import React from 'react';
import { mount } from 'enzyme';
import HomePage from '../components/pages/home';
import { appWrapper } from '../app';
import { initialState } from '../state/initialState';
import createHistory from 'history/createBrowserHistory';
import configureStore from '../configureStore';

const history = createHistory();
let store = configureStore(initialState, history);

describe('Home page', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('should render correctly', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: { homepage: { heading: "hi" } } }))
        const component = mount(appWrapper(HomePage, store));
        expect(component.find('.home-page').length).toBe(1);
    });
}); 