# World and Philippines Covid 19 Tracker 

  This website is my attempt at creating a Covid-19 Tracker that shows current global data with additional focus on Philippines setting. As of now, there are plenty of Covid-19 websites tracker out there however majority of which only has data available for each countries. 
  Thus I added another section for local data for Philippine settings. 

  To view the live version of the website please click [Covid19 Tracker](https://gideongannaban.github.io/MS2-Covid-Tracker/).

# UX

### USER STORIES
* As a user, I would like to know the current total covid-19 data as well as daily data worldwide
* As a user, I would like to know the current total data for each country 
* As a user, I would like to be able to view the world wide and each country's data at the same time for comparison
* As a user, I would like to know the current covid-19 data per province in the philippines
* As a user, I would like to know the demography of these cases per gender and age range

### Design

* I decided to create 2 sections for this project for comparison purposes. The 1st section deals with the data in a global scale by providing the worldwide covid-19 stats and the ability to check each countries situtation. 
   The 2nd section deals with providing local data in the Philippines. 

### Color Scheme
* Multiple colors were used to indentify the individual data presented. The colors assigned to the output in the boxes were consistent to avoid confusion. 

### Typography
* The "Roboto" font is the main font used throughout the whole website with Sans Serif as the fallback font in case the font isn't imported into the site correctly. "Roboto" is a  clean font which is both attractive and appropriate.

### WIREFRAMES
* I used Balsamiq Wireframe 4 to create the framework for the website. There have been several modifications as the project progressed but below is the final outputs:

    - [Wireframe](https://github.com/gideongannaban/MS2-Covid-Tracker/blob/master/Wireframe/Wireframe.pdf)

# FEATURES
### EXISTING FEATURES

 I wanted to make this a simple yet informative site thus I've decided to give it a minimalist approach. I only used data that a typical user would like to see. 
 I used charts to display percentages of confirm cases per gender and age as it's easier to interprete. 

### FUTURE FEATURES

 Add map functionality for the each section so that when user chose a country/province then they will have an idea of its location.
 Add a Continent category for the country list so it will give additional knowledge to the user which continent a country belongs to.

### API USED

- [Covid19 API](https://covid19api.com/) - used to generate the covid19 data needed for each category

### Challenges:
* One of the challenges is on the Province Data. Unfortunately, there are no available API for local covid-19 data in Philippines thus I ended up creating a csv then converted it to a JSON object. The disadvantage of which is I would need to manually update the csv to reflect updated numbers in my website. 

# TECHNOLOGY USED
- [HTML5](https://en.wikipedia.org/wiki/HTML5) - To create the structure and content of the page
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - Used to style the website
- [Bootstrap4](https://getbootstrap.com/) - This framework was used to create a responsive mobile-first design and include functioning components.
- [Fontawesome](https://fontawesome.com/) - I used the font awesome icons for the social media, location and contact details
- [Googlefonts](https://fonts.google.com/) - Used to style the fonts of the website
- [Favicon](https://favicon.io/) - Used to create the website icon
- [Trello](https://trello.com/) -  Used as my project management tool
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Primary function of the site for all user interaction.
- [ConvertCSV.com](https://www.convertcsv.com/csv-to-json.htm) - Used to convert data from CSV to JSON
- [JShint](https://jshint.com/) - To validate JavaScript codes

# TESTING
### Code Validation:

The W3C Markup Validators were used to validate the page to ensure there were no syntax error in the project. Below are the results of the testing:

* CSS [Validator](https://jigsaw.w3.org/css-validator/): No errors found.

    ![CSS}(https://github.com/gideongannaban/MS2-Covid-Tracker/blob/master/Validation/CSS%20Validator.PNG)

* HTML [Validator](https://validator.w3.org/): No errors found.

    ![HTML](https://github.com/gideongannaban/MS2-Covid-Tracker/blob/master/Validation/HTML%20Validator.PNG)

The JShint validtor was used to validate the JavaScript codes to ensure there were no syntax error. 

* JavaScript [Validator](https://jshint.com/) with below result:
     ![countries.js](https://github.com/gideongannaban/MS2-Covid-Tracker/blob/master/Validation/countries%20JS.PNG)
     ![phCases.js](https://github.com/gideongannaban/MS2-Covid-Tracker/blob/master/Validation/phCases%20JS.PNG)

### Page Responsiveness Testing

The primary tool used to monitor the page responsiveness was [Google Chrome Developer Tool](https://developers.google.com/web/tools/chrome-devtools). The tests were done using the following platforms:

  * Samsung Note 10
  * Samsung S9+
  * Iphone 5/SE
  * Iphone 6/7/8
  * Ipad Pro
  * Laptop 1024px
  * Laptop >1200px

The summary of the tests can be accessed [here](https://github.com/gideongannaban/MS2-Covid-Tracker/blob/master/Readme%20files/testtable.pdf).

### Browser Compatibility Testing

Browser testing was done using below browsers to ensure website can be viewed for all users. 
The website is responsive on all browsers except for the IE, the entire sites' margin and spacing was all over the place since IE didn't support the Bootstrap grid. 

  * Chrome
  * Firefox
  * Edge
  * Safari
  * IE

### Testing User Stories

  * As a user, I would like to know the current total covid-19 data as well as daily data worldwide.

    - When the user opens up the website they will see the global covid-19 on top of the page. This information was positioned on top of the page so its the first detail 
      that will catch the user's attention.

  * As a user, I would like to know the current total data for each country.

    - In the middle of page, the user can see the Data per Country sub-header. Below of which is the option to choose the country to determine the total Confirmed, Deaths, and Recovered for each country. 
    - User will need to click on the "Enter Country Name" then the list of countries will show. They'll need to click on the country that they wanted to view to accessed pertinent data.

  * As a user, I would like to be able to view the world wide and each country's data at the same time for comparison.

    - Once the user clicked on the chosen country, the pertinent data of such country will be shown under the CONFIRMED, DEATHS AND RECOVERED. At the same time, the global data can still 
      be viewed on top of the page for comparison.

  * As a user, I would like to know the current covid-19 data per province in the philippines

    - This can be achieved when the user clicks on the dropdown button below the Philippine Cases per Province sub-header. Once clicked, the user then need to choose wich province to accessed 
      from the list. Once that's done then the data on the CONFIRMED, DEATHS and RECOVERED will be populated on their respective location.

  * As a user, I would like to know the demography of these cases per gender and age range

    - Once user clicked on their chosen province, the chart per gender and age range will automatically populated below the covid-19 province data. 

### Additional Testing

Manual testing was done using Samsung Note 10, Sony Z5 and Iphone 5 by family members.
The responsive design was tested using [Responsinator](http://www.responsinator.com/) and [ami.responsivedesign.is](http://ami.responsivedesign.is/) websites.

# DEPLOYMENT

#### This project was deployed to [Github Pages](https://github.com/gideongannaban/MS2-Covid-Tracker) by following below procedure:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/gideongannaban/MS2-Covid-Tracker)
2. At the upper right corner of the Repository Page, click on the "Settings" Button.
3. In the Settings Page, scroll down until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page should automatically refresh when you select the Master Branch.
6. Once refreshed, scroll back to the "Github Pages" section to locate link for the deployed website.

#### Making a Github Clone:

1. In the [repository page](https://github.com/gideongannaban/MS2-Covid-Tracker), click on the Clone or Download button ( right beside the Gitpod button).
2. To clone the repository using HTTPS, copy the link in the "Clone with HTTPS" 
3. Open Git Bash. 
    * Make sure Git Bash App is downloaded in your laptop/desktop
    * Paste the Cloned link using the "Git Bash here" option.

    ![git-bash-capture](https://github.com/gideongannaban/MS2-Covid-Tracker/blob/master/Readme%20files/git-bash-capture.png)

4. Type "git clone" in the Git Bash command page, then paste the URL you copied.

    ![git-clone](https://github.com/gideongannaban/MS2-Covid-Tracker/blob/master/Readme%20files/Git%20Clone.PNG)


5. Press Enter to create the local clone. 
    
    ![git-clone](https://github.com/gideongannaban/MS2-Covid-Tracker/blob/master/Readme%20files/Git%20Clone%202.PNG)


Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) for additional details and more detailed explanation of the process.     

# CREDITS


        