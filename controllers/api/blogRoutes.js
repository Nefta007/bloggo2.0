const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/:id/comment', async (req, res) => {
    try {
        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id/comment', withAuth, async (req, res) => {
    try {
        const deleteData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!deleteData) {
            res.status(404).json({ message: 'No Blog found with this id!' });
            return;
        }

        res.status(200).json(deleteData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;