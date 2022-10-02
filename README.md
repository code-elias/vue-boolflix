# Movie Streaming App

## Educational Project

This is a replica of a movie streaming website similar to Netflix or Disney+.

### Analysis

This Project has been assigned by Boolean S.r.l. It's also my **first large VueApp** that makes use of dynamic API and user inputs.

**Boolean** established the *milestones* to follow for the project.

Milestones 1 through 3 focus on the fetching and manipulation of the correct data from **TheMovieDatabase API** and displaying them correctly on screen.
Milestone 4 implements the UI (aesthetics) and UX. There are also two additional bonus Milestones (5 and 6) that allows displaying of additional info about a movie or tv series and adds filters for them. This requires more advanced manipulation of the API that I will leave for the end once all of the **non-optional** milestones work properly.

### Steps

#### Setup

I created the vue project and connected to a remote repo on GitHub. Next I focused on analysing the macro-structure of the Project and began planning my components top down.
This division is done in a very abstract way because I am not thinking of the design or the micro-components.

* HeaderComponent: this component will contain the logo, some user info, search bars and any settings I will decide to add afterwards.
* MainComponent: as the name suggests, this is the main component that will display the movies/tv series.
* FooterComponent: additional links, support links and other company info will go here.

These three all are added to the structureComponent folder.
Next I began planning the components within each of these sections. Considering that right now I am focusing only on the functional part of the website, the only component I need in this case is the *ContentComponent.vue* within the MainComponent. I added it to the **components** folder.

Last I decided to create a **utilityComponents** folder for some generic and resusable utility elements. Currently the only one I need for the first three milestones is a search bar. I plan to turn into an expandible search bar so I called it *SearchBar_ExpandibleComponent.vue*.

#### Milestone 1

The first Milestone requires to implement a search bar that will send a query API request and then manipulate this data through the app to display it properly.

I added an input field in **Search Bar** that takes in a string typed by the user and emits it to its parents all the way to **App.vue**. Finally in App.vue it is captured by a function called **setNewQuery** that sends an *axios* call to the TheMovieDatabase API through the query string typed by the user. On top of sending user queries, at the first load of the page and whenever the user deletes their input, the setNewQuery function sends a generic API request that in our case requests a list of the current trending movies.

The setNewQuery function directs the axios query towards two arrays: movieSearchResuls and tvSearchResults. These two arrays, as the name suggests, contain the results of the API results. These two arrays are sent separately to the MainComponent as props. MainComponent contains two ContentComponent, one taking the data for movies, the other for tv series.

I planned the structure this way to allow reusability and scalability. Tv Series and Movies can be handled as unique instances of the same component and allows future scalability in case we wanted to have more specific arrays such as: Latest Releases, Documentaries, etc.

#### Milestone 2

The second milestone requires adding a flag for each movie/tv series based on the original language of the production. To accomplish this I added a new API endpoint (from <https://countryflagsapi.com/>) that generates flags based on country codes. The original API results contain country code as well, so it works with some minor corrections needed. Certain country codes from the TMDB API don't match the ones in countryflags api, so I created an additional function that corrects these mistakes before sending the API request to countryflags: **flagID**.

#### Milestone 3

The third milestone requires adding the cover/poster for each movie and display their rating in stars.

## VERSIONS

### 0.5: MileStone 4

Create the actual Web Layout

#### 0.5.4: Added basic layout to HeaderComponent

#### 0.5.3: Added subcomponents in HeaderComponent

#### 0.5.2: Added Default styles to APP

#### 0.5.1: Added SCSS stylesheets

* personal-reset.scss
* style.scss
* utilities.scss
* variables.scss

### 0.4: MileStone 3

Add Movie Cover and Stars (rating)

#### 0.4.12: Caught image not found error

* (TODO) Need to implement fix with alternative images

#### 0.4.11: Implemented InteractiveCardComponent

#### 0.4.10: Added additional subcomponents for better scalability

* Added InteractiveCardComponent for each movie/tv series
* Added a rating system for each item

#### 0.4.9: Changed some variable names for better readability

#### 0.4.8: Added TOTAL_STARS constant for easy changes

* TOTAL_STARS in data allows to easily switch between 5 and 10 stars by simply modifying one attribute

#### 0.4.7: Added empty stars

#### 0.4.6: Added full and halfStars

#### 0.4.5: Created getStars function to turn rating into stars

#### 0.4.4: Created getRating function to turn the string into proper rating format

#### 0.4.3: Added Font Awesome Stars (full, empty and half)

#### 0.4.2: Created getPosterSrc to retrieve poster image

#### 0.4.1: Added TMDB_IMG_API to create path

### 0.3: MileStone 2

Dynamically add language flag based on original language

#### 0.3.2: Added getFlagSrc function to retrieve flag image from API

#### 0.3.1: Added FLAG_API with proper endpoint

### 0.2: MileStone 1

Dynamically retrieve movies and tv series through a search function

#### 0.2.6: Turned API strings into an object TMDB_API

#### 0.2.5: Refactored setNewQuery into various smaller functions

#### 0.2.4: Implemented Dynamic Search feature into the page

#### 0.2.3: Created setNewQuery function

#### 0.2.2: Added Search Emit

#### 0.2.1: Created Search Bar Component

### 0.1: Setup

#### 0.1.5: Added Components to App.vue

#### 0.1.4: Added Necessary Font Awesome components

#### 0.1.3: Created Component Structures

#### 0.1.2: Added Components

#### 0.1.1: Created Vue Cli Project

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
