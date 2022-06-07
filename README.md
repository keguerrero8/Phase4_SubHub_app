# SubHub

## Description

SubHub is an application that helps users track and manage their monthly subscriptions. Every year digital experiences become more prominent in our lives and so do the digital payments.  With so many services offering subscriptions, it becomes easy to lose track of how many subscriptions one has signed up for and what needs to be payed for a specific month.  To alleviate this headache, I wanted to build an application that could help with managing subscriptions so that you are on top of your payments and have an overall view of your subscription landscape!  Live site can be found at http://subhub-kg-sn.herokuapp.com 
    
![subhub](https://user-images.githubusercontent.com/91296112/172360921-f64dd9ae-87fc-4024-95b2-7ed29e609f41.gif)


## Features

* Subscription dashboard providing a summary of the month's expenses
* Calender view of all monthly subscriptions up to one year past the current month
* Add or delete subscriptions to your current collection
* Update subscription information such as payment date, payment amount, or if it is a recurring or one time payment


## Back End Technologies and Architecture

Backend was built with Ruby on Rails with a Postgres database.  Highlights of the backend architecture include the following:

* Authentication and Authorization using Bcrypt for password hashing
* Validations to ensure valid user inputs
* RESTful API with full CRUD functionality for multiple resources
* One-to-many database relationship (ERD shown below)

![Screen Shot 2022-06-07 at 7 21 44 AM](https://user-images.githubusercontent.com/91296112/172367589-fa88ee1b-0bd0-41a1-a136-7d09a7ada296.png)


## Front End Technologies and Architecture

Frontend was built with React. Highlights of the frontend architecture include the following:

* User Interface designed with Material UI 
* Recharts library to integrate pie chart for monthly summary
* React Slick for creation of carousel to display top payments
* React Big Calender used for calender view on upcoming subscriptions
* Material UI integrated media queries for mobile responsiveness


## Installation and Usage

Prerequisites: Install Node.js and the npm command line interface using either a Node version manager or a Node installer.  Also make sure the latest Ruby version is installed as well as rails which can be done through RubyGems.

1. Fork and clone the repository
2. cd into the main folder directory
3. To install for the first time:
       a) `bundle install` (backend)
       b) `npm install --prefix client` (frontend)
4. To start the application:
       a) `rails s` (backend)
       b) `npm start --prefix client` (frontend)

