var homeController = {
    getHome: function (req, res) {
        res.send('<h1>Home page</h1>');
    }
};

module.exports = homeController;
