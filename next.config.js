module.exports = {
    async redirects() {
        return [
            {
                source: '/resume',
                destination: '/resume/professional-experience',
                permanent: false,
            },
        ];
    },
};
