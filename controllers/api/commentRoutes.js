const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res)=>{
    Comment.create({
        ...req.body, user_id: req.session.user_id
    }).then(()=>res.redirect(`/blog/${req.body.blog_id}`));
});


module.exports = router;