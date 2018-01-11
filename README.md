<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we'll complete the functionality of a social media platform by using `axios` in a `react` project. Majority of the application has already been built out for you. Take some time before starting to familarize yourself with the component structure. The platform we'll be building out is a scaled down version of twitter and we'll focus on the functionality for fetching all the DevMountain posts, creating new posts, editing existing posts, and deleting existing posts.

This is a live API, please be respectful and mindful of what you post.

# Live Example

<a href="https://devmountain.github.io/react-3-afternoon/">Click Me!</a>

<img src="https://github.com/DevMountain/react-3-afternoon/blob/solution/assets/1.png" />

## Setup

* `Fork` this repository.
* `Clone` your fork.
* `cd` into the project directory.
* Run `npm install`.
* Run `npm start`.

## API Documentation

Before continuing to step 1, take a minute to browse the API documentation.

https://swaggerhub.com/apis/DevMountain/social_mountain/1.0.0

## Step 1

### Summary

In this step, we'll import axios into the project and fetch all the DevMountain posts. Using the return posts array, we'll assign it to state and pass it down into the components that need it. Remember to use the API documentation to help you complete the steps.

### Instructions

* Run `npm install --save axios`.
* Open `./src/components/App.js`.
* Import `axios` at the top.
* Create a `componentDidMount` method that fetches all the posts using `axios`.
* Use the result of the `axios` call to set a `posts` array on state.
* Pass the posts array down as a `prop` into the `Feed` component.
* Pass the posts array length down as a`prop` into the `Summary` component.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by importing `axios` into our project. In your command line, make sure you are in the root project directory, run `npm install --save axios`. Then open `./src/components/App.js` and at the top with the other imports, import axios.

```js
import axios from 'axios';
```

We are using this component to fetch the `posts` because it is the parent component to the `Summary` and `Feed` component. Both those components rely on the `posts` array. Let's create a `componentDidMount` method that uses `axios` to fetch our `posts`. Remember, when fetching data from a server always use a `GET` request. Using the API documentation we can see that the base API url is: `practiceapi.devmountain.com/api` and uses a `https` scheme. We can also see that all our post endpoints are under the `/posts` route.

```js
componentDidMount() {
  axios.get('https://practiceapi.devmountain.com/api/posts').then( results => {

  });
}
```

When inspecting the value of `results` we can see that the API puts the `posts` array on the `data` property. Let's assign that to `posts` on state.

```js
componentDidMount() {
  axios.get('https://practiceapi.devmountain.com/api/posts').then( results => {
    this.setState({ posts: results.data });
  });
}
```

To avoid any rendering errors before `posts` has a value on `state`, let's create a `constructor` method and default `posts` to be an empty array.

```js
constructor() {
  super();

  this.state = {
    posts: []
  }
}
```

Lastly, we'll just need to pass down the value of `posts` on state down into the children components that are depending on it. The `Summary` component depends on the length of `posts` to display it and the `Feed` component depends on `posts` to `map` over them and `render` them. Since I'll be referring to `this.state.posts` multiple times in my render method, I'll use `es6 destructuring` on `state`.

```js
render() {
  const { posts } = this.state;

  return (
    <div className="App__parent">
      <Header />

      <section className="App__content">
        <Summary count={ posts.count } />
        <Feed posts={ posts } />
      </section>
    </div>
  );
}
```

</details>

### Solution

<details>

<summary> <code> ./src/components/App.js </code> </summary>

```js
import React, { Component } from 'react';
import axios from 'axios';


import './App.css';

import Header from './Header/Header';
import Summary from './Summary/Summary';
import Feed from './Feed/Feed';

class App extends Component {
  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/api/posts').then( results => {
      this.setState({ posts: results.data });
    });
  }

  constructor() {
    super();

    this.state = {
      posts: []
    }
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">
          <Summary count={ posts.count } />
          <Feed posts={ posts } />
        </section>
      </div>
    );
  }
}

export default App;
```

</details>

## Step 2

### Summary

In this step, we'll get the `Compose` button to create new DevMountain posts.

## Step 3

### Summary

In this step, we'll get the `Edit` button to edit existing DevMountain posts.

## Step 4

### Summary

In this step, we'll get the `Delete` button to delete existing DevMountain posts.

## Black Diamond

Search functionality..

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>