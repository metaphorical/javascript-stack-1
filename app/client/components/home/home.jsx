const React = require('react');
const className = require('classnames');
const styles = require('./home.css');
const SearchForm = require('../common/searchForm');
module.exports = (view) => { return (
        <div className={styles.container}>
            <h1>Enter your search </h1>
            <SearchForm />
        </div>
    );
};
