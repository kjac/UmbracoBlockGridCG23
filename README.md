# UmbracoBlockGridCG23

This repo contains the demo site from my Umbraco Block Grid talk at CodeGarden in June 2023.

The site is built on Umbraco 11.4, which means you need .NET 7 to run it.

The site DB is included in this repo, so you should be able to "just" clone the repo and run the site.

The credentials for the backoffice are:

- Email: admin@localhost
- Password: SuperSecret123

...these are also displayed on the login screen :smile:

Among other things, this repo demonstrates how one can build back-office custom views for the Block Grid using web components for encapsulation, and reuse these web components when rendering the front-end site. Umbraco 11 does not natively support loading custom scripts as modules, so we have to get a little creative in order to load the web components into the back-office. Have a look at [`loader.js`](tree/main/App_Plugins/My.BlockGrid/loader.js) to see what that looks like.

:warning: :warning: When trying this out, please keep in mind that the block HTML and CSS is written by a back-end developer. It is by no means perfect - for one it doesn't scale very gracefully to smaller screens. :warning: :warning:

Have fun!

