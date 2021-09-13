module.exports = {
    siteMetadata: {
        siteUrl: 'https://fuwajs.github.com',
        title: 'Fuwa.js docs',
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
                icons: [
                    {
                        src: `src/images/logo192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `src/images/logo512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /images/,
                },
            },
        },
    ],
};
