# vue-boolfix

## Description of the project

This is a replica of a movie sharing website similar to Netflix or Disney+.

## VERSIONS

### 0.4: MileStone 3

Add Movie Cover and Stars (rating)

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
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
