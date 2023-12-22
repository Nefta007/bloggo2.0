const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const commentsRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
router.use('/blog', blogRoutes);
router.use('/comment', commentsRoutes)

module.exports = router;