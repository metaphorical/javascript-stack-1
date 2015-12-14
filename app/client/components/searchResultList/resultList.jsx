"use strict"

const React = require('react');
const className = require('classnames');
const resultCard = require('../searchCard');
const styles = require('./resultList.css');
module.exports = (view) => {
    let results = view.props.results;
    return (
        <ul className={styles.container}>
            {results.map( (result) => {
                    return React.createElement(resultCard, {key: result.key,
                        Title: result.value.Title,
                        Poster: result.value.Poster,
                        Year: result.value.Year});
                })
            }
        </ul>
    );
};
