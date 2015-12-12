const React = require('react');
const resultCard = require('./resultCard.jsx.jsx');

module.exports = React.createClass({
    componentDidMount() {
        console.log('Result Card form mounted');
    },
    goToDetail(e) {
        e.preventDefault();
        console.log('Place code here... for umm... goto Detail?');
    },
    render() {
        return resultCard(this);
    }
});
