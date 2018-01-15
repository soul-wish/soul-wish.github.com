module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "sample-authors", // The name of directory that contains your authors.
  blogAuthorId: "soulwish", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Sergey Lysenko", // Site title.
  siteTitleAlt: "Sergey Lysenko – front-end developer", // Alternative site title for SEO.
  siteLogo: "/logos/logo-192x192.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://soulwish.info", // Domain of your website without pathPrefix.
  pathPrefix: "/",
  siteDescription: "Passionate front-end developer from Ukraine.", // Website description used for RSS feeds/meta description tag.
  siteCover: "/images/blog-cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Sergey Lysenko", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-36912866-3", // GA tracking ID.
  siteSocialUrls: [
    "https://github.com/soul-wish",
    "https://twitter.com/Soul_Wish",
    "mailto:soulwish.ls@gmail.com"
  ],
  postDefaultCategoryID: "front-end", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/soul-wish",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Soul_Wish",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:soulwish.ls@gmail.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "© Sergey Lysenko (aka Soulwish)" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: false // Enables the GatsbyJS promotion information in footer.
};
