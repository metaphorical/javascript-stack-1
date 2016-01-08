const React = require('react');
const className = require('classnames');
const styles = require('./searchForm.css');
module.exports = (view) => {
    return (
        <div className={styles.searchBox}>
            <form action="">
                {view.props.searchString ?
                <input type="text" placeholder="Movie name" ref={(ref) => view.searchInput = ref} defaultValue={view.props.searchString}/>
                :
                <input type="text" placeholder="Movie name" ref={(ref) => view.searchInput = ref} />}
                <input type="button" value="Go!" onClick={view.searchAction}/>
            </form>
        </div>
    );
};
