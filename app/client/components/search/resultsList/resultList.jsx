"use strict";

const React = require('react');
const className = require('classnames');
const resultCard = require('../../common/searchCard');
const styles = require('./resultList.css');

module.exports = (view) => {
    return (
        <ul className={styles.container}>
            {view.props.results.map( (result) => {
                    return React.createElement(resultCard, {key: result.key,
                        Title: result.value.Title,
                        Poster: result.value.Poster,
                        Year: result.value.Year,
                        imdbID: result.value.imdbID,
                        searchString: view.props.searchString,
                        detailAction: view.props.detailAction
                    });
                })
            }
        </ul>
    );
};
