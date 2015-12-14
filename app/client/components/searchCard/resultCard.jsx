const React = require('react');
const className = require('classnames');
const styles = require('./resultCard.css');
module.exports = (view) => { return (
        <div className={styles.container}>
            <img src={view.props.Poster} alt=""/>
            <h1>{view.props.Title}</h1>
            <p> [{view.props.Year}]</p>
        </div>
    );
};
