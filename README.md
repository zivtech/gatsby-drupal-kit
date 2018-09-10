
This a Drupal 8 gatsby V2 starter kit designed to work out-of-the-box (more or less) with a standard drupal 8 install profile. Currently a work in progress.

Drupal site: http://dev-drupal-gatsby.pantheonsite.io/
Gatsby site: https://clever-gates-db60f2.netlify.com/

## Gatsby Setup 
1. Fork and/or clone this repo into a directory... any directory (no vm/mamp nonsense needed). 
2. run "npm install --global gatsby-cli" (google "install node" if this doesn't work)
3. cd to your repo directory and run "gatsby develop" 
4. you should see our example drupal content on your local site: http://localhost:8000 

## Drupal 8 setup 
1. You'll need drupal to be hosted remotely, and be accessible via the web. I'd recommend setting up a free https://pantheon.io/register drupal 8 site for testing this if want to save time! 
3. Install a standard profile
4. Download and enable: webhook, ctools, token, pathauto, and jsonapi. 
6. *IMPORTANT* Disable the contact form module (long story...)
7. Configure "anonymous" role to have access to jsonapi in the permissions page. 
8. Configure automatic paths for taxonomy term tags, and articles (otherwise, just be sure to give your tags and articles url aliases). 
9. Create an article that includes an image, and a tag. 

## Connect the sites 
1. At the root of the gatsby repo, edit "gatsby-node.js" 
2. Replace "http://dev-drupal-gatsby.pantheonsite.io/" with your site's publically accessible url. 

## Setup a live CI enviroment 
1. Sign up for a free netlify.com account. 
2. Connect your github repo (forked or cloned from this code)
3. select "gatsby" as the platform
4. Create a webhook in netlify. 
5. Configure drupal to fire the webhook to that url on content updates. 

By this point your netlify gatsby site will auto-update anytime you *push to master branch*, or *update content* in drupal. When working locally, you'll have to shut down "gatsby develop" and restart it for content changes to take effect. 

# Motivations for creating a new starter kit. 
Confession: I'm very new to react/gatsby. This repo is based on https://github.com/gatsbyjs/gatsby/tree/master/examples/using-drupal

Here's why I'm developing "yet another." 
1. I just wanted drupal and gatsby to work out of the box. I didn't want to have to build a recipe sharing site just to get started. 
2. I'm looking to create efficent *patterns* that can be applied in any drupal gatsby integration.
3. I like to learn new things. Please contact me or open an issue if you see I've done something wrong, or unnecessarily brutal. I'll warn you ahead of time my frontend is rusty... I'm mostly concerned with structure of components, the queries, and the pipelines. 


