# World and Philippines Covid 19 Tracker 

* This website is my attempt at creating a Covid-19 Tracker that shows current global data with additional focus on Philippines setting. As of now, there are plenty of Covid-19 websites tracker out there however majority of which only has data available for each countries. 
  Thus I added another section for local data for Philippine settings. 

# UX

## USER STORIES
* As a user, I would like to know the current total covid-19 data as well as daily data worldwide
* As a user, I would like to know the current total data for each country 
* As a user, I would like to be able to view the world wide and each country's data at the same time for comparison
* As a user, I would like to know the current covid-19 data per province in the philippines
* As a user, I would like to know the demography of these cases per gender and age range
* As a user, I should be able determine the location of these places from the map

## Design

* I decided to create 2 sections for this project for comparison purposes. The 1st section deals with the data in a global scale by providing the worldwide covid-19 stats and the ability to check each countries situtation. 
   The 2nd section deals with providing local data in the Philippines. 

## Color Scheme
* Multiple colors were used to indentify the individual data presented. The colors assigned to the output in the boxes were consistent to avoid confusion. 

## Typography
* The "Roboto" font is the main font used throughout the whole website with Sans Serif as the fallback font in case the font isn't imported into the site correctly. "Roboto" is a  clean font which is both attractive and appropriate.

# WIREFRAMES
* I used Balsamiq Wireframe 4 to create the framework for the website. There have been several modifications as the project progressed but below is the final outputs:

 * [Wireframe]

# FEATURES
## EXISTING FEATURES

 I wanted to make this a simple yet informative site thus I've decided to give it a minimalist approach. I only used data that a typical user would like to see. 
 I used charts to display percentages of confirm cases per gender and age as it's easier to interprete. 

## FUTURE FEATURES

 Add map functionality for the each section so that when user chose a country/province then they will have an idea of its location.
 Add a Continent category for the country list so it will give additional knowledge to the user which continent a country belongs to.

## API USED

- [Covid19 API](https://covid19api.com/) - used to generate the covid19 data needed for each category

### Challenges:
* One of the challenges is on the Province Data. Unfortunately, there are no available API for local covid-19 data in Philippines thus I ended up creating a csv then converted it to a JSON object. The disadvantage of which is I would need to manually update the csv to reflect updated numbers in my website. 

#TECHNOLOGY USED
- [HTML5](https://en.wikipedia.org/wiki/HTML5) - To create the structure and content of the page
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - Used to style the website
- [Bootstrap4](https://getbootstrap.com/) - This framework was used to create a responsive mobile-first design and include functioning components.
- [Fontawesome](https://fontawesome.com/) - I used the font awesome icons for the social media, location and contact details
- [Googlefonts](https://fonts.google.com/) - Used to style the fonts of the website
- [Favicon](https://favicon.io/) - Used to create the website icon
- [Trello](https://trello.com/) -  Used as my project management tool
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Primary function of the site for all user interaction.
- [ConvertCSV.com](https://www.convertcsv.com/csv-to-json.htm) - Used to convert data from CSV to JSON

# TESTING



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

     ![git-bash-capture]

4. Type "git clone" in the Git Bash command page, then paste the URL you copied.

    ![git-clone]


5. Press Enter to create the local clone. 
    
    ![git-clone]


Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) for additional details and more detailed explanation of the process.     

# CREDITS


        