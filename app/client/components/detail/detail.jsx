const React = require('react');
const className = require('classnames');
const styles = require('./detail.css');
module.exports = (view) => { return (
        <div className={styles.container}>
            <button onClick={view.backAction}>Back { view.state.lastSearch ? "to search" : "home" }</button>
            <br/>
            <h1>{view.state.Title}</h1>
            <h3>{view.state.Year}</h3>
            <img src={view.state.Poster} alt=""/>
            <p>{(view.state.Plot) ? (view.state.Plot) : "...loading"}</p>
        </div>
    );
};
