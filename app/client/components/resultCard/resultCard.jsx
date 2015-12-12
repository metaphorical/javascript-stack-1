const React = require('react');
const className = require('classnames');
const styles = require('./resultCard.css');
module.exports = (view) => { return (
        <div className={styles.resultCard}>
            <h1>{props.Title}</h1>
            <img src={props.Poster} alt=""/>
        </div>
    );
};
