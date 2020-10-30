var Blog = require('../models/blogModel.js');

const { validationResult } = require('express-validator');

/**
 * blogController.js
 *
 * @description :: Server-side logic for managing blogs.
 */
module.exports = {

     /**
     * blogController.list()
     */
    list: async function (req, res) {
        
        const errors = validationResult(req);

        let blogs = [];
        let { limit } = req.body;
        
        if (!errors.isEmpty()) {
            return res.status(400).json({
                error: errors.array(),
                status: false,
                message: errors.array()[0].msg
            });
        }
        
        try {
            limit = parseInt(limit);
            
            blogs = await Blog.find()
            .sort({ updatedAt: -1 })
            .limit(limit);
        } catch (err) {
            return res.status(500).json({
                error: err,
                status: false,
                message: 'Something went wrong',
            });
        }

        return res.status(200).json({
            data: blogs,
            status: true,
            message: 'Latest Blogs'
        });
    }
};