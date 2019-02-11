# World's Biggest Garage Sale - Real World Application

## Links to Published App
[Visit the main application](https://react-app-ca.herokuapp.com/) 

[Visit the server](https://wbgs-server.herokuapp.com/)

## Links to Git Repositories
[Client repository](https://github.com/Manik747/React-proj)

[Server repository](https://github.com/EnFen/express-proj)

## Project Description
### Initial Consultation Questionnaire

### Purpose
 * To create a formal portal for organization wanting to host a WBGS- with the ultimate goal of *finding hosts that align with WBGS values*  
 * Retrieve information about candidates to be saved into a database- which could be used in other apps and send request to WBGS
 * Secondary - Create a dashboard to track client info and application status

### Scope
 * To provide WBGS with the tools to formally accept EOI’s with these deliverables
 * Send those details via email
 * Save those details to a MONGO database
 * To provide WBGS with a dashboard to manage EOI
 * Display EOI data
 * Shortlist candidates
 * Functionality & Features 
 * Application is able to take expressions of interest and submit data to a mailer and a database
 * Dashboard is available to view expressions of interest
 
### Functionality & Features 
The landing page makes use of videos, quotes, statistics and buttons that are highlighted . This is to draw potential host in and have them submit a expression of interest.

Application is able to take expressions of interest and submit data to a mailer and a database. User who submitted the form is sent a confirmation email and wgbs is sent and email with the data submitted.

Dashboard is available to view expressions of interest ,dashboard displays cards with each eoi printed out on them. Only the hosts name, organisation and date of the eoi is displayed on the cards. There is also a view button on each card that takes the eoi id  and sends  it through the router to the next section of dashboard which is the dashboard view. There is also a filter option to filter what eoi’s are displayed if they are either shortlisted or not.

Dashboard view is where the eoi’s data is fetched from the db and displayed to admin. There is a checklist along side the information that is there to check off if potential host meet wbgs criteria. Eois can be updated - shortlisted  and rejected. If an eoi is rejected the admin is prompt for a denial reason  which is then sent via email to candidate who submitted eoi explaining there rejection.


### Tech. Stack
#### Front-End: 
React / CSS / HTML
#### Back-End: 
Node / Express / Mongoose
#### Database: 
MongoDb
#### Deployment Platforms: 
Heroku for Client and Server, MLabs for Database

### Initial Client Consultation
[Initial Consultation](/docs/initial_consult_client_questionnaire.pdf)

### Client Diary
[Client Diary](/docs/client_diary.pdf)

### Project Charter
[WBGS Project Charter](/docs/project_charter.pdf)

### Screenshots of Final Application
![Home Page Top](/docs/img/application_screenshots/homeTop.png)
![Home Page Top](/docs/img/application_screenshots/homeCentre.png)
![Home Page Top](/docs/img/application_screenshots/homeBottom.png)
![Home Page Top](/docs/img/application_screenshots/eoiForm1.png)
![Home Page Top](/docs/img/application_screenshots/eoiForm2.png)
![Home Page Top](/docs/img/application_screenshots/eoiForm3.png)
![Home Page Top](/docs/img/application_screenshots/confirmation_submission.JPG)
![Home Page Top](/docs/img/application_screenshots/dashboard.png)
![Home Page Top](/docs/img/application_screenshots/dasboardView.png)


### Handover (incl. Satisfaction questionnaire)
[Handover Document](/docs/handover.pdf)
Note: Questionnaire Pending

### Instructions for Use

#### GUEST USER
1. Visit application homepage (currently https://react-app-ca.herokuapp.com/ )
2. View video on landing page
3. Navigate to WBGS information and statistics
4. Follow the call to action to express your interest in hosting a WBGS event
5. Fill out and submit the expression of interest form
6. Receive an email confirming your application
7. Wait for a reply from WBGS


#### ADMIN USER
1. Receive an email notification of a newly submitted expression of interest.
2. Visit application homepage (currently https://react-app-ca.herokuapp.com/ )
3. Log in to the application to get directed to the application dashboard
4. View a list of all of the expressions of interest received from potential WBGS hosts. Filter this list to see all applications, or only those currently on the shortlist.
5. Select one of the listed EOI’s to see more detailed data about the applicant
6. Review / check off  the submitted data to verify that the applicant meets your criteria for a WBGS
7. If the applicant does not meet criteria, deny the application, giving a valid reason. This will be sent as an email to the user.
8. If the applicant meets all criteria, add them to the shortlist
9. Pick appropriate applicants from the shortlist for follow up to organise a WBGS in their local community!

## Design Documentation
### User Journey / Flow Diagram 
[WBGS User Journey Diagram](/docs/img/wbgs_user_journey.jpg)

### OOP / Components
[WBGS OOP / Components List](/docs/oop_components.pdf)

### Wire-Frames
[WBGS Wireframes](/docs/img/wireframes)

### Data Flow
[WBGS Data Flow Diagraams](/docs/img/wbgs_datflow.jpg)

### ERD
[WBGS ERD](/docs/img/wbgs_erd.png)

## Details of Project Management and Planning Process
### Project Sprints
The Project was divided into two sprints of a week each:
 - 1st - General Architecture and Expression of Interest Features
 - 2nd - Dashboard
 
### Project Planning Document
[Project Planning](/docs/project_planning.pdf)

### White Boarding / Brainstorming Photos
[Brainstorming](/docs/img/planning)

### Project Timeline & Effort Estimation
Used Trello labels and dates to estimate:
 * Importance of Features to Client Deliverables and Scope,
 * Effort Required (T-shirt sizes)
 * Task Dependencies
 * Task Assignment , and
 * Task Completion Dates
 
### Trello Board Screenshots
[Trello Boards](/docs/img/trello_screen_caps)

The Trello board can also be seen in full at: https://trello.com/b/dNKT0C4a/real-world-react-app

### Team Communication
Slack was used predominantly, and allowed for communication away from the common programming environment and out of hours. Outside of this,  Google Docs, GitHub comments, and in person communication were all used where possible

### Source Control Process
We used github as our source control software, and followed a fork workflow. 
Each contributor had their own fork of the pristine master branch, and checked out and worked on feature branches for different aspects of the application.
Completed feature branches were submitted for code review by at least two other contributors before a merge back into the master branch was allowed.

### Testing
 * Automated / Unit Tests - To be performed - had problems getting Jest & Mocha working with app
 * Regression Tests - To be performed
 * Integration Tests - To be performed  - had problems getting Jest & Mocha working with app
 
### Post Project Review
#### What did we enjoy?
 * The project itself, that it could be used by a really cool company / good cause
 * The project journey - it was great being able to see the project develop from a client’s ideas to completion
 * Functionality - It works!!
 * Splitting the work into two sprints - broke the work into modular, manageable work projects
 * Collaboration - we all did really well on our own project features which combined to make a great final project

#### What did we find challenging?
 * Authorisation / Security
 * Testing - frameworks did not seem to function well with the application (more learning required)
 * Communication with busy client - this made getting feedback and resources difficult when we needed to progress
 * Work life balance - difficulties balancing work, travel, sleep
 * Balancing project needs & client needs - we wanted to make the client happy, but also had to meet the project requirements
 * Team management - some team members live far away, or work overnight: it was hard for us all to meet together regularly

#### What did we learn?
 * Email setup, 
 * CSS transitions, 
 * CORS configuration, 
 * Express session management & Authentication, 
 * Redux forms, 
 * Semantic UI, 
 * Filtering Trello - effective for teams, 
 * Delving into Mongoose
 
## Questions:
#### What are the most important aspects of quality software?
#### Answer:

Three high-level areas of software quality, and some aspects within each are considered below:
 * Functional - How well does the software meet the needs of its users?
    - Usability / Accessibility - This concerns the intuitiveness of the user interface, and how well the software allows a user to do what they need to do, and how easy it is for a user to learn how to use it. It also encompasses their ability to access the software - for example, enabling users with disabilities, older devices, or low connection speeds to use an application.
 * Structural - How well does the software meet the needs of its owners?
    - Reliability - This relates to the likelihood of the software to withstand or manage interruptions in service such as failures or downtime. An unreliable software application reflects poorly on the perception and reputation of its owners, and could affect adoption. 
    - Efficiency / Performance - This considers how well the software consumes resources, which include (but are not limited to) CPU power, memory, and storage space. Poor performance can affect product perception, and increase costs for owners. 
    - Security - This concerns all factors in which the software could expose the software owners to risk. Security breaches can be particularly damaging to owners, and possibly even users who have personal information or other assets stored in the application.
 * Process - How well does the software meet the needs of developers?
    - Flexibility / Extensibility - This considers software adaptability, portability, and transferability. If not handled well, these can result in system damages, or entire rewrites of code when needs of the software change.
    - Maintainability / Readability - This relates to code testability, as well as how easy the code is to understand. Misunderstood code can cost developers unnecessary time and effort.

*Davidchappell.com. (2019). [online] Available at: http://www.davidchappell.com/writing/white_papers/The_Three_Aspects_of_Software_Quality_v1.0-Chappell.pdf  [Accessed 7 Feb. 2019].*

*dzone.com. (2019). 10 Software Quality Factors That Should Always Be Remembered - DZone Performance. [online] Available at: https://dzone.com/articles/10-groups-software-quality  [Accessed 7 Feb. 2019].*

*En.wikipedia.org. (2019). Software quality. [online] Available at: https://en.wikipedia.org/wiki/Software_quality  [Accessed 7 Feb. 2019].*


### What are the libraries being used in the app, and why?
### Answer:

#### Backend
##### @sendgrid/mail 
* A dedicated service for sending emails from node.js apps 
* Used in this application to send emails to applicants and to WBGS after an expression of interest has been submitted, and also to email denied applicants 

https://github.com/sendgrid/sendgrid-nodejs/tree/master/packages/mail

##### cors
* A node.js package for which provides express middleware that can be used to enable cors
* Used to enable connection between the front-end and back-end of the application

https://github.com/expressjs/cors 

##### debug
* Default express generator library
* Customises console messages
* Currently only used in default modules created by express generator
https://github.com/visionmedia/debug 

##### dotenv
* Loads environment variables from .env for node.js projects.
* Used for storing secure variables for the application

https://github.com/motdotla/dotenv 

##### ejs
* Embedded javascript templating library
* Used in the application to compose html strings to be sent as emails from the server

https://github.com/mde/ejs 

##### express
* A web framework for node.js
* Used as the server architecture for the application

http://expressjs.com/ 

##### express-acl
* An express module which allows the use of “Access Control Lists”
* Used in the application for access routing for users with authorised roles (eg. admin access to dashboard)

https://github.com/nyambati/express-acl 

##### express-session
* Session middleware for express
* Used in the application in conjunction with passport to manage user authentication

https://github.com/expressjs/session 

##### http-errors
* Default express generator library
* Allows for easy creation of HTTP errors in express
* Used in default modules created by express generator, and minor error handling in the application

https://github.com/jshttp/http-errors 

##### joi
* Allows for the creation of object schemas for validation
* Used in the application to sanitise and validate data being submitted to the database

https://github.com/hapijs/joi 

##### mongoose
* An abstraction layer for mongoDB which allows for elegant object modelling in node.js
* Used in the application to define schemas and to issue data queries to the database

https://mongoosejs.com/docs/guide.html 

##### morgan
* Provides helpful HTTP logging middleware for node.js
* Used in the application development environment for debugging and console messaging

https://github.com/expressjs/morgan 

##### passport
* An authentication middleware for node.js
* Used as the user authentication backbone in the application, with additional dependencies on express-session, and passport-local-mongoose

http://www.passportjs.org/docs/downloads/html/ 

##### passport-local-mongoose
* A mongoose plugin that simplifies user authentication with passport
* Used in the application in conjunction with passport to manage user authentication

https://github.com/saintedlama/passport-local-mongoose 

##### mocha
* Javascript test framework
* Used on back-end of the application for unit testing

https://mochajs.org/ 

##### superagent
* HTTP request library
* Used in the application in conjunction with supertest for instantiating authentication in testing environment

https://github.com/visionmedia/superagent 

##### supertest
* HTTP request test library
* Used in the application to test routing

https://github.com/visionmedia/supertest 

#### Frontend
##### React-Semantic
* A Simple Styling library great for buttons

https://react.semantic-ui.com

##### Redux
* A program that allows React to have a global state

https://redux.js.org/introduction/getting-started

##### React Router Dom
* Program for routing component to App to render

https://www.npmjs.com/package/react-router-dom

##### React-transition
* A styling library with simple animations that can be applied to components

##### YouTube-ui
* Helps render Iframes in components

##### React-router-last-location
* Extension of React router that allows the previously rendered component to re-render

https://www.npmjs.com/package/react-router-last-location

##### Prop-types
* Allows for validation of information received into components

https://www.npmjs.com/package/prop-types

##### Final-form-arrays
* A simple styling library for forms

https://www.npmjs.com/package/final-form-arrays

##### Redux-thunk
* An extension of Redux which adds some functionality

https://github.com/reduxjs/redux-thunk

### A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?
### Answer:
A development team would need a range of both soft and hard skills in order to complete a project for a small business. Exact skills required may differ depending on the business, and project, but a range of the following hard and soft skills may be required:
#### Hard skills
* Wide range of technical expertise
    - HTML
    - CSS
    - JS / JSON / AJAX
    - Core Programming Language(s) (Node.js, Ruby, Python)
    - Frameworks & Libraries (React, Express, Ruby on Rails, Django)
    - Third Party Software & API’s
    - Database / Query Language(s) (PostGres, Mongo / Mongoose, GraphQL)
    - Email integration
    - CMS's (Wordpress Drupal)
    - Web Security
    - SEO
    - Social media integration 
    - Deployment / SysAdmin
    - Analytics
    - Mobile Development / Support
    - Testing & Maintenance
* Web & Graphic Design Skills
    - Responsive design
    - Knowledge of Design Software
    - Design sense (logos, photos etc.)
* Project Management (Time, Resources, Task Allocation)
* Documentation (instructions for use, records of assets etc.)
* Business Acumen


#### Soft Skills
* Problem Solving Mindset
* Client Communication / Negotiation / Expectation Management
* Openness to Changes / Acceptance of Criticism
* Team Management, Communication, & Cooperation
* Creativity
* Positivity
* Attention to Detail


*Best Website Builder Reviews for 2019. (2019). What You Need to Build a Website - The Definitive Website Checklist 2019. [online] Available at: https://www.websitebuilderexpert.com/building-websites/what-you-need-to-build-a-website-checklist/  [Accessed 7 Feb. 2019].*

*Classifieds, U. and BLOG, U. (2019). 7 Skills Every Web Developer Needs on Their Resume - USA TODAY Classifieds. [online] USA TODAY Classifieds. Available at: http://classifieds.usatoday.com/blog/careers/7-skills-every-web-developer-needs-resume/amp/  [Accessed 7 Feb. 2019].* 

*Lifewire. (2019). Here Are the Top 10 Skills Every Web Designer or Developer Should Have. [online] Available at: https://www.lifewire.com/web-designer-job-skills-3468909  [Accessed 7 Feb. 2019].*

*SmBizDaily. (2019). Why You Need a Full Stack Web Developer for Your Business. [online] Available at: https://www.smallbizdaily.com/full-stack-web-developer-your-business/  [Accessed 7 Feb. 2019].*

	
### Within your own project what knowledge or skills were required to complete your project, and overcome challenges?
### Answer: 
In our own project, we needed the following skills:
* Hard skills
    - HTML
    - CSS
    - JS / JSON / AJAX
    - Node.js
    - React
    - Third Party Software & API’s
    - Mongo / Mongoose
    - Email integration
    - Data validation
    - Deployment to Heroku
* Soft Skills
    - Problem Solving Mindset
    - Client Communication
    - Team Management, Communication, & Cooperation
    - Creativity
    -Attention to Detail


### Evaluate how effective your knowledge and skills were in this project, and suggest changes or improvements for future projects of a similar nature?
### Answer: 
Some of the most effective skills we employed in the project were debugging and research skills, as these helped us to address problems with technologies we hadn’t encountered before, and to learn more about the expected performance of some of our libraries and frameworks. In addition to this, we felt that our excellent project planning assisted us in maintaining scope creep, thorough understanding of application requirements prior to development, and delegating features to team members. We also found that early deployment helped us to quickly identify and address problems (such as cross browser functionality and styling).
For future projects we would employ mobile first development and use Sass for styling. We also realised we would have greatly benefited from more deeper understanding of Redux, and testing frameworks such as Jest or Mocha.
