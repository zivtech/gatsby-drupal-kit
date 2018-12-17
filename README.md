
This a Drupal 8 gatsby V2 starter kit designed to work out-of-the-box (more or less) with a standard drupal 8 install profile. Currently a work in progress.

Drupal site: http://dev-drupal-gatsby.pantheonsite.io/
Gatsby site: https://master--clever-gates-db60f2.netlify.com/

## Gatsby Setup (required)
1. Fork, download, or clone this repo. It shouldn't matter where you put it. (no vm/mamp nonsense needed). 
2. Using the command line, cd to the root of this repo. Run "npm install." (google "install node" if this doesn't work)
3. Install gatsby-cli. Command is "npm install --global gatsby-cli" 
4. From the root directory of the repo, run "gatsby develop." Once the setup process completes, you can start working with the site at http://localhost:8000. For the most part, the compiler will process code changes in ~1 second. Change some code, and your browser should actually automatically refresh! 

## Drupal 8 setup (optional)
1. You'll need drupal to be hosted remotely, and be accessible via the web (I'd recommend setting up a free https://pantheon.io/register drupal 8 site for testing this if want to save time!)
3. Install a standard profile
4. Download and enable: [webhooks](https://www.drupal.org/project/webhooks), [ctools](https://www.drupal.org/project/ctools), [token](https://www.drupal.org/project/token), [pathauto](https://www.drupal.org/project/pathauto), and [jsonapi](https://www.drupal.org/project/jsonapi) 
5. Install [GraphQL](https://www.drupal.org/project/graphql). Note this must be done via composer (run "composer require drupal/graphql" from drupal 8 root
6. *IMPORTANT* Disable the contact form module (long story...)
7. Configure "anonymous" role to have access to jsonapi in the permissions page. 
8. Configure automatic paths for taxonomy term tags, and articles (otherwise, just be sure to give your tags and articles url aliases) 
9. Create an article that includes an image, and a tag 

## Connect the sites (optional)
1. At the root of the gatsby repo, edit "gatsby-config.js" 
2. Replace "http://dev-drupal-gatsby.pantheonsite.io/" with your site's publically accessible url

## Setup a live CI enviroment (optional)
1. Sign up for a free netlify.com account 
2. Connect your github repo (forked or cloned from this code)
3. Select "gatsby" as the platform
4. Create a webhook in netlify 
5. Configure drupal to fire the webhook to that url on content updates 

By this point your netlify gatsby site will auto-update anytime you *push to master branch*, or *update content* in drupal. When working locally, you'll have to shut down "gatsby develop" and restart it for content changes to take effect. 

# What's the big picture? Here's a list of articles to jumpstart your understanding:
1. "Composition vs Inheritance." A simple rejection of traditional object oriented conventions for the frontend https://reactjs.org/docs/composition-vs-inheritance.html
2. "Thinking in react." Just read and accept the way: https://reactjs.org/docs/thinking-in-react.html
3. Differences between graphql and REST: https://blog.apollographql.com/graphql-vs-rest-5d425123e34b
