
# NOT YET STABLE (hello badcamp folks, this is only public for you :-D )  
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

# "Extending" this kit 
I'm not a gatsby expert, so this is sort of the blind leading the blind. Wrote a blogpost on the parts, how to use them. In this particular example, we creating a new pipeline, and template for the "page" content type. Should apply to most anything...
(url)

# Some notes on gatsby hosting/deployments 
This is a brave new world where all pages are static, and overloading a server is next to impossible. It should never be a problem for gatsby to completely rebuild all pages for any reason or at any frequency. The static page *is* the cache in a way, and only a backend process can produce the pages... In otherwords, 10 dollar a month hosting + a cdn would be fine for a high traffic webste!  

So on netlify, the worst that can happen is you push bad code to master. This causes the build to be rejected, and content updates will stop appearing until the error is fixed. 

The next worst thing is if you publish content that shouldn't have gotten published. On average, expect prod builds to have a delay of about 2 mins for a for real site. The netlify CDN is sometimes finicky about clearing (for the most part it is immediate, but I've seen it get stuck for 30 mins or so for no apparent reason).

# Motivations for creating a new starter kit. 
Confession: I'm very new to react/gatsby. This repo is based on https://github.com/gatsbyjs/gatsby/tree/master/examples/using-drupal

Here's why I'm developing "yet another." 
1. I just wanted drupal and gatsby to work out of the box. I didn't want to have to build a recipe sharing site just to get started. 
2. I'm looking to create efficent *patterns* that can be applied in any drupal gatsby integration.
3. I like to learn new things. Please contact me or open an issue if you see I've done something wrong, or unnecessarily brutal. I'll warn you ahead of time my frontend is rusty... I'm mostly concerned with structure of components, the queries, and the pipelines. 


