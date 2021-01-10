module.exports = {
	siteMetadata: {
		title: 'Høussaine Amzil - Front End Developer',
		description:
			"Coding was and still one of my most preferred hobbies. Since a young age, I've loved the idea of being able to build something new that people all around the world can use, experience, and interact with.",
		author: '@houssaineamzil',
		siteUrl: 'https://houssaineamzil.com',
	},
	plugins: [
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-offline',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
		{
			resolve: 'gatsby-plugin-styled-components',
			options: {
				displayName: false,
			},
		},
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'none',
			},
		},
	],
};
