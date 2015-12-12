const React = require('react');
const resultList = require('./resultList.jsx');

module.exports = React.createClass({
    componentDidMount() {
        console.log('Result List mounted');
    },
    render() {
        return resultList(this);
    }
});
