# CSCI 1300 Development Project

### Describe the goal of the application and value to a user
The goal of this application is for a pokemon fan to be able to search
different pokemon from generations 1 to 4, quickly look at some of their important
properties like type and best stat, and add them to a potential list for their team.
Note: while we aggregate on weight and weight is not that important for most players,
there are special battle formats of the game that restrict total weight so seeing total
weight can be useful for those players

### Link to your deployed web application running online
https://maladjustedcarp401.github.io/Development/

### Explain the organization of your Components, and the props and state related to them
We start off with most of our Functionality in App.js
It has the following states
    finalList -> list of pokemon to display on the left
    teamList -> left of pokemon in your current team
    filterOneText -> current text to filter pokemon type by
    fitlerTwoText -> current stat to filter pokemon by
    checked -> if the sort (ascending) on weight toggle is on
    checkedTwo -> if the sort (desending) on weight toggle is on
    weight -> stores total weight of team

Then our layout is split into two grid portions, one for displaying
the total amount of possible pokemon to pick, and the other being your current team.
The right side maps through the finalList state and the left side maps through
teamList. While mapping it creates a PokemonBox component for each

A PokemonBox component is a component that stores data of each pokemon
to display in a nice box format (the data that is in the json file in
assets/pokemon.js). 
    It also takes props for finalList and teamList which allows it to
    know if a pokemon in the list has been chosen, and if it should be
    added or removed from the team when the corresponding button is pressed

### How the User Triggers State Changes
The user triggers state changes here by first loading the application which
causes the list of pokemon to be loaded, but also through the filters and sorts.
Clicking these causes the list of pokemon show to have its state changed, causing a
rerender. Furthmore adding to and removing from the team causes the pokemon list
and team list to have their state changed, which causes a rerender.    

### Note the usability principles considered for layout and hierarchy
In terms of layout and hierarchy I made sure to keep my filters 
at the top so that it mad sense that they were more like editors than the main
content to be looked at.

I also made sure to use headers where the top had h1's and as you go down
the headers become smaller (like h2 and h4). This helped make sure that the
hierarchy of the content was clear.

Other parts I used were color and contrast. Important words were bolding
to constract more with the background, while less important details (like the pokemon's
number) were greyed out and made smaller to not take away from the focus being the pokemon's name.

I also used borders to help section off the PokemonBox's from eachother.
