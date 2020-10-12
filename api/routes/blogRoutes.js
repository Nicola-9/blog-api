const articleController = require('../controllers/articleController');

const routes = (app) =>{
    const articleController = require('../controllers/articleController');

    app.route('/articles')
        .get(articleController.getAllArticles)
        .post(articleController.addNewArticle);

    app.route('/articles/:articleID')
        .get(articleController.getArticle)
        .patch(articleController.patchArticle)
        .put(articleController.putArticle)
        .delete(articleController.deleteArticle);
}

module.exports = {
    routes: routes
};