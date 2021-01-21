# UFOs

## Purpose

The purpose of this project is to design a webpage to help display information pertaining to UFO sightings. Included on the site is a table that lists all of the reported sightings available. Due to the amount of information available, I have included a filter to help narrow down the information by date, city, state, country and shape.

## Project Overview

- Create, update, and deploy JavaScript functions to provide additional table filters.
- Update and deploy forEach (for loop) to loop through the filters and update them with user input.
- Update and populate the dynamic filters and table using JavaScript and HTML.


## Resources
- Data Source: [UFO Sightings Data](https://github.com/vrod237/UFOs/blob/master/static/js/data.js)
- Software: Visual Studio Code, 1.38.1, JavaScript, HTML5, CSS & D3.js

## Summary


- Access UFO website <a href="https://vrod237.github.io/UFOs/">here</a>

- I created multiple input tags to filter the data, the data can be filtered by date, city, state, country and/or shape. Based off the data that's entered, each input will go through nested ifs, if the date is a match then all dates will be pulled. If no date is entered, the if statement will move onto the next nested if and so on and so forth, if there is match then all matching data will be pulled. 

- A recommendation would be to examine the dataset and look for any discrepancies within the data, it would be good to examine and clean it first before adding it directly into a table. Perhaps there can also be a way to validate UFOs sightings? Such a provide a picture as proof or anomaly in the weather (if there's a correlation with other sightings), in a URL link. There's been multiple occasions throughout history where individuals throught they saw a UFO but it turned out to not be a UFO. 
