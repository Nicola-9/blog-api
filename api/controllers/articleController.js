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
    },
    getArticle: (req, res) =>{
        let articleID = req.params.articleID;

        Article.findById(articleID, (error, article) =>{
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
    },
    patchArticle: (req, res) =>{
        let fieldToUpdate = req.body;
        let articleID = req.params.articleID;

        Article.findOneAndUpdate({ _id: articleID }, { $set: fieldToUpdate }, { new: true }, (error, article) =>{
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
    },
    putArticle: (req, res) =>{
        let articleToUpdate = req.body;
        let articleID = req.params.articleID;

        Article.findOneAndUpdate({ _id: articleID }, articleToUpdate, (error, article) =>{
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
    },
    deleteArticle: (req, res) =>{
        let articleID = req.params.articleID;

        Article.findByIdAndDelete(articleID, (error, article) =>{
            if(error){
                return res.status(500).json({
                    response: "UNSUCCESS", 
                    error: "Internal Server Error" 
                });
            }

            return res.status(200).json({
                response: "SUCCESS",
                data: "Article successfully deleted"
            });
        });
    }
}