'use strict';

const React = require('react');
const components = require('../../app/client/components');

var TestUtils = React.addons.TestUtils;


describe('Search form', () => {
    var component;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(React.createElement(components.Search));
    });

    it('should render search form title', () => {
       expect(component.getDOMNode().textContent).toMatch(/Enter your search/);
    });
});