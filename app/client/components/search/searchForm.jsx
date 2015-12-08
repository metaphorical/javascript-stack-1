const React = require('react');
module.exports = (view) => { return (
        <div class="Search">
            <h1>Enter your search</h1>
            <form action="">
                <input type="text" placeholder="Movie name"/>
                <input type="button" value="Go!" onClick={view.doSearch}/>
            </form>
        </div>
    );
};
