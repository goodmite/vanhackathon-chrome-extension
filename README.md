<img src="https://ph-files.imgix.net/3586e786-1446-4987-9eda-7565dd61d213?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=381.6907675194661&h=380&fit=max&dpr=2">

Note: this is frontend repo. Backend repo is [here](https://github.com/goodmite/vh2019-be). Product hunt link [here](https://www.producthunt.com/posts/vanhackathon-vanhack-chorme-extension)

# VanHack quick-acess chrome Extension

VanHack quick access is a chrome extension that will allow you to easily access job update, track, accept or reject events and get realtime notification. You can apply to jobs, check and update event in no time!

[Link to chrome webstore](https://chrome.google.com/webstore/detail/vanhack-quick-access/ccedfcdijipjpkclkdehieejnddhdmdd)

## Problem details
This Project is made to solve two problem propsed in the prep kit: 
1. Surprise Us - A quick an easy way to access job and get realtime notifications for job updates.
2. Calendar Page - Please checkout Events tab in extension. 

## Motivation
As a VanHack user, I have experienced that to stay up to date with status of job applications, new Job and event I need to regularly keep checking the site or my email. Its quite tedius and sometimes impractical, like when I am at workplace.
The goal of this extension is to put most common functionalities of the site (like Job listing, Job application, notification) just a click away.

## Tech stack
1. Angular 8
2. NodeJs
3. NestJs
4. MongoDB
5. Socket.io
6. Typescript

Other libraries:
1. ngx-loadify (my own library)
2. ng-clickoutside
3. ng-zorro


# Running the project
**Simply go to chrome webstore and install extension: [link](https://chrome.google.com/webstore/detail/vanhack-quick-access/ccedfcdijipjpkclkdehieejnddhdmdd)**

OR

To test locally:

Fronted:
1. Clone this project and run ``` npm i && ng build --watch```
1. Open Chrome browser
2. go to chrome://extensions
3. Turn on developer mode
4. Click on Load Unpacked. A file dialog will open up.
5. Select folder named: CHROME_EXTENSION
6. Click on VanHack icon to run the extension.

Backend:

1. Clone backend repo found [here](https://github.com/goodmite/vh2019-be)
2. run ```npm install```
3. run ```npm start```
