const withPwa = require('next-pwa');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    {
        images: {
            domains: ['storage.googleapis.com']
        },

        distDir: 'build',
    },
    [withPwa, {
        pwa: {
            disable: process.env.NODE_ENV != 'production',
            dest: 'public',
            register: true,
            sw: '/sw.js'
        }
    }]
])