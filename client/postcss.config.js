module.exports = {
    plugins: [
        require('postcss-discard-comments'),
        require('postcss-inline-comment'),
        require('postcss-strip-inline-comments'),
    ]
}