const React = require('react');
const className = require('classnames');
const styles = require('./searchForm.css');
module.exports = (view) => { return (
        <div className={styles.searchBox}>
            <h1>Enter your search</h1>
            <form action="">
                <input type="text" placeholder="Movie name" ref={(ref) => view.searchInput = ref}/>
                <input type="button" value="Go!" onClick={view.doSearch}/>
            </form>
            <div id="resultsList"></div>
        </div>
    );
};
