const mongoose = require('mongoose'), Article = mongoose.model('Articles');

module.exports = {
    getAllArticles: (req, res) =>{ 
        Article.find({}, (error, articles) =>{
            if(error){
                return res.status(500).json({
                    response: "UNSUCCESS", 
                    error: "Internal Server Error" 
                });
            }

            return res.status(200).json({
                response: "SUCCESS",
                data: articles
            });
        }).sort({ featured: -1 });
    },
    addNewArticle: (req, res) =>{
        let newArticle = new Article(req.body);

        newArticle.save((error, article) =>{
            if(error){
                return res.status(500).json({
                    response: "UNSUCCESS", 
                    error: "Internal Server Error" 
                });
            }

            return res.status(200).json({
                response: "SUCCESS",
                data: article
            });
        });
    }
}