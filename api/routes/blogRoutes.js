const articleController = require('../controllers/articleController');

const routes = (app) =>{
    const articleController = require('../controllers/articleController');

    app.route('/article')
        .get(articleController.getAllArticles)
        .post(articleController.addNewArticle);
}

module.exports = {
    routes: routes
};