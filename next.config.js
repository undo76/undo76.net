module.exports = {
    async redirects() {
        return [
            {
                source: '/resume',
                destination: '/resume/personal',
                permanent: false,
            },
        ];
    },
};
