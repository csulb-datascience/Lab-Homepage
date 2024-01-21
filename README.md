# Dr. Ju Cheol Moon's Lab Homepage

## [Go to Homepage](https://csulb-datascience.github.io/Lab-Homepage/)

## Update Notice

#### Jan 21st 2024

- Now we can add thesis paper PDF` links into the Group page.
    - Need to add `thesis` parameter in `json_data/group.json`
    - The "Thesis Paper" button will show up regardless of the `thesis` parameter. But if there is no link provided, the button will be disabled.
    - This goes same to the "Learn More" button.

- Image profile for Group page is now available.

- Fixed Learn More button link issue.

- Removed the "Learn More" button on the Teaching page.

## Github Deployment Guide

- The website is published by Github Pages
- Any changes on the code will be reflected in 5 - 10 mins on the actual website
- Sometimes if the code is not significant, the change won't be recognized by Github (e.g. Adding one or two lines on JavaScript files). 

    - I'm guessing it's because Github tries to avoid to waste its resources to build the website. Or their deployment structure has brutal caching system so that it can ignore unrecognizable changes.

    - Based on my experience, the best way to apply the changes are:
        1. Insert any link on any HTML.
        2. Modify the README.md
        3. Add some files.
