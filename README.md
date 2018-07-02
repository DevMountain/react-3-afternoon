<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

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

In this step, we'll use `axios` to fetch `posts` from the API and render them on the `DOM`.

### Instructions

* Add `axios` to the project using `npm install --save axios`.
* Open `./src/components/App.js`.
* Import `axios` into the component.
* Use `axios` and the API documentation to fetch `posts` in the `componentDidMount` method.
  * Set the `posts` array returned from the API onto `posts` on `state`.
* Import the `Post` component.
* Underneathe the `Compose` component, map over `posts` on `state` and render a `Post` component for each `post`.
  * Remember that React requires a unique key property when using a `map`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening a terminal and `cd` into the root of the project. We'll need to add `axios` to our project in order to make API requests. We can do so by running `npm install --save axios`.

Now let's open `./src/components/App.js` and import `axios` into the component. Near the top of the file with the other import statements, add the following code:

```js
import axios from 'axios';
```

Now that we have `axios` imported, we can go into the `componentDidMount` method and make a `GET` request to the API. Using the API documentation we can see that we need to make a `GET` request to `https://practiceapi.devmountain.com/api/posts`. The API documentation also explains that a `GET` request returns an array of post objects. We'll need to capture this returned array and set it onto `posts` on `App`'s `state`.

```js
componentDidMount() {
  axios.get('https://practiceapi.devmountain.com/api/posts').then( results => {
    this.setState({ posts: results.data });
  });
}
```

Now when the `App` component mounts it will fetch the array of `posts`. The last thing we'll need to do is `map` over the `posts` and render them onto the `DOM`. We'll need to import the `Post` component into `./src/components/App.js`. Once it has been imported, we can go into the `render` method and render a `Post` component for every `post` in the `posts` array on `state`. Remember when using a `map` in the `render` method, the element needs a unique `key` property. In this case, we can use the `id` of the `post`.

```js
render() {
  const { posts } = this.state;

  return (
    <div className="App__parent">
      <Header />

      <section className="App__content">

        <Compose />
        
        {
          posts.map( post => (
            <Post key={ post.id } />
          ))
        }

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
import Compose from './Compose/Compose';
import Post from './Post/Post';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/api/posts').then( results => {
      this.setState({ posts: results.data });
    });
  }

  updatePost() {
  
  }

  deletePost() {

  }

  createPost() {

  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />
          
          {
            posts.map( post => (
              <Post key={ post.id } />
            ))
          }

        </section>
      </div>
    );
  }
}

export default App;
```

</details>

<img src="https://github.com/DevMountain/react-3-afternoon/blob/solution/assets/2.png" />

## Step 2

### Summary

In this step, we'll pass `props` down into the `Post` component in order to see the `text` and `date` for each `post`.

### Instructions

* Open `./src/components/App.js`.
* In the `render` method, update the `map` to send the following `props` into `Post`:
  * `text` - Should equal the `post`'s `text`.
  * `date` - Should equal the `post`'s `date`.
* Open `./src/components/Post/Post.js`.
* Update `POST DATE GOES HERE` to equal the value of `date` on `props`.
* Update `POST TEXT GOES HERE` to equal the value of `text` on `props`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `./src/components/App.js`. In the `render` method, we'll need to update the `map` to include two new props on the `Post` component. The `props` we'll need are: `text` and `date`. If we take a look at the API documentation we can see that a `post` object has an `id`, `text`, and `date` property. We can access the properties we need by using `post.text` and `post.date`.

```js
{
  posts.map( post => (
    <Post key={ post.id }
          text={ post.text}
          date={ post.date } />
  ))
}
```

Now that our `Post` component is receiving the `text` and `date`, we can `render` them in the `Post` component. Let's open `./src/components/Post/Post.js`. I'm going to destructure `text` and `date` off of `props` at the top of the `render` method for easier referencing.

```js
const { text, date } = this.props;
```

We can then update `POST DATE GOES HERE` and `POST TEXT GOES HERE` to use these destructured values.

```js
<span className="Post__date">- { date }</span>
<span className="Post__text">{ text }</span>
```

</details>

### Solution

<details>

<summary> <code> ./src/components/App.js ( posts map ) </code> </summary>

```js
{
  posts.map( post => (
    <Post key={ post.id }
          text={ post.text}
          date={ post.date } />
  ))
}
```

</details>

<details>

<summary> <code> ./src/components/Post/Post.js ( render method ) </code> </summary>

```js
render() {
  const { editing, showMasterMenu } = this.state;
  const { text, date } = this.props;

  return (
    <section className="Post__parent" onClick={ this.hideMasterMenu }>

      <div className="Post__master-controls">
        <MasterControlIcon onClick={ this.toggleMasterMenu } />

        <div className="Post__master-menu" style={ { display: showMasterMenu ? 'flex' : 'none' } }>
          <span onClick={ this.showEdit }>Edit</span>
          <span>Delete</span>
        </div>
      </div>

      <div className="Post__meta-data">
        <div className="Post__profile-picture">
          <ProfileIcon />
        </div>

        <span className="Post__name">DevMountain</span>
        <span className="Post__handle">@DevMountain</span>

        <span className="Post__date">- { date }</span>
      </div>

      <div className="Post__content">
        {
          editing
          ?
            <Edit text=""
                  hideEdit={ this.hideEdit } />
          :
            <span className="Post__text">{ text }</span>
        }
      </div>

      <div className="Post__user-controls">
        <ReplyIcon className="Post__control-icon" />
        <FavoriteIcon className="Post__control-icon" />
        <MessageIcon className="Post__control-icon" />
      </div>

    </section>
  )
}
```

</details>

<img src="https://github.com/DevMountain/react-3-afternoon/blob/solution/assets/3.png" />

## Step 3

### Summary

In this step, we'll create the `updatePost` method to use `axios` to update a `post`'s `text`.

### Instructions

* Open `./src/components/App.js`.
* In the `updatePost` method, use `axios` to send a `PUT` request to the correct endpoint.
  * Remember that this method will need to work for any `post`. Hint: `function parameters`.
  * Use the returned data from the request to update `posts` on `state`.
* Pass the `updatePost` method down as a `prop` called `updatePostFn` in the `posts` `map`.
* Add a new `prop` to the `map` called `id` that equals the `post`'s `id`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `./src/components/App.js`. In the `updatePost` method, we'll need to use `axios` to make a `PUT` request to the API. Using the API documentation, we can see that when editing a post the API is expecting a `PUT` request at `https://practiceapi.devmountain.com/api/posts`. We can also see that the endpoint uses the request query to determine the `post` `id` and uses the request body to determine the `post` `text`. Because the `id` and `text` of the post will be different every time the method is called we should use an `id` and `text` parameter for the method.

```js
updatePost( id, text ) {

}
```

We can then use these parameters to construct our `axios` request and use the returned data to update `posts` on `state`. When using `axios.put()` the second argument is the `request` body. 

```js
updatePost( id, text ) {
  axios.put(`https://practiceapi.devmountain.com/api/posts?id=${ id }`, { text }).then( results => {
    this.setState({ posts: results.data });
  });
}
```

Now that our method is constructed, all we need to do is pass it down into the `component` that needs it. In the `render` method, let's update the `map` to include a new `prop` called `updatePostFn` that equals the `updatePost` method. We'll also add a new `prop` called `id` that equals the `post`'d `id`. 

```js
{
  posts.map( post => (
    <Post key={ post.id }
          text={ post.text}
          date={ post.date }
          id={ post.id }
          updatePostFn={ this.updatePost } />
  ))
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
import Compose from './Compose/Compose';
import Post from './Post/Post';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/api/posts').then( results => {
      this.setState({ posts: results.data });
    });
  }

  updatePost( id, text ) {
    axios.put(`https://practiceapi.devmountain.com/api/posts?id=${ id }`, { text }).then( results => {
      this.setState({ posts: results.data });
    });
  }

  deletePost() {

  }

  createPost() {

  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />
          
          {
            posts.map( post => (
              <Post key={ post.id }
                    text={ post.text}
                    date={ post.date }
                    id={ post.id }
                    updatePostFn={ this.updatePost } />
            ))
          }

        </section>
      </div>
    );
  }
}

export default App;
```

</details>

## Step 4

### Summary

In this step, we'll make the `Edit` button functional by using the `updatePostFn`.

### Instructions

* Open `./src/components/Post/Post.js`.
* Locate the `<div>` element with the class of `Post__content`.
  * In this `div` we either render the `Edit` component or the `post`'s `text`.
* Add a new `prop` to the `Edit` component called `updatePostFn` that equals `updatePostFn` off of `props`.
* Add a new `prop` to the `Edit` component called `id` that equals `id` off of `props`.
* Update the `text` `prop` to equal `text` off of `props`.
* Open `./src/components/Post/Edit/Edit.js`.
* Update the `updatePost` method to:
  * Call `updatePostFn` off of `props` with the correct `id` and `text` arguments.
  * Call `hideEdit` off of `props` after `updatePostFn`.
    * `hideEdit` is reponsible for toggling the `Edit` component off after pressing the `update` button.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `./src/components/Post/Post.js`. In the `render` method, there is a `div` with the class of `Post__content` that either renders a `post`'s `text` or an `Edit` component. The `Edit` component is responsible for capturing a user's new text to assign to a `post`. In order for the `Edit` component to function, we'll need to pass the `updatePostFn` `prop` from `Post.js` as a `prop` into `Edit.js`. We'll also need to pass down the `post`'s `text` and `id` so they can be used as the arguments for the `updatePostFn`. You'll notice that a `prop` called `hideEdit` already exists, that method is responsible for hiding the `Edit` component after updating a `post`'s `text`.

```js
<div className="Post__content">
  {
    editing
    ?
      <Edit text={ text }
            id={ id }
            hideEdit={ this.hideEdit }
            updatePostFn={ updatePostFn } />
    :
      <span className="Post__text">{ text }</span>
  }
</div>
```

Now that we're passing down all the necessary `props` into the `Edit` component, let's open `./src/components/Post/Edit/Edit.js` and get the `Edit` button functional. We'll need to update the `updatePost` method. This method gets called when a user clicks on `update`. The component keeps track of the new text value on its `state`. Knowing this, we can call `updatePostFn` with `id` off of `props` and `text` off of `state`. After we call `updatePostFn` we should also call `hideEdit` off of `props` to hide the `Edit` component.

```js
updatePost() {
  const { text } = this.state;
  const { id, updatePostFn, hideEdit } = this.props;

  updatePostFn( id, text );
  hideEdit();
}
```

</details>

### Solution

<details>

<summary> <code> ./src/components/Post/Post.js ( Post__content ) </code> </summary>

```js
<div className="Post__content">
  {
    editing
    ?
      <Edit text={ text }
            id={ id } // Remember to destructure id off of props or use this.props.id
            hideEdit={ this.hideEdit }
            updatePostFn={ updatePostFn } />
    :
      <span className="Post__text">{ text }</span>
  }
</div>
```

</details>

<details>

<summary> <code> ./src/components/Post/Edit/Edit.js ( updatePost method ) </code> </summary>

```js
updatePost() {
  const { text } = this.state;
  const { id, updatePostFn, hideEdit } = this.props;

  updatePostFn( id, text );
  hideEdit();
}
```

</details>

<br />

<img src="https://github.com/DevMountain/react-3-afternoon/blob/solution/assets/4g.gif" />

## Step 5

### Summary

In this step, we'll create the `deletePost` method to use `axios` to delete a `post` and also make the `Delete` button functional.

### Instructions

* Open `./src/components/App.js`.
* In the `deletePost` method, use `axios` to send a `DELETE` request to the correct endpoint.
  * Remember that this method will need to work for any `post`. Hint: `function parameters`.
  * Use the returned data from the request to update `posts` on `state`.
* Pass the `deletePost` method down as a `prop` called `deletePostFn` in the `posts` `map`.
* Open `./src/components/Post/Post.js`.
* Update the `delete` `span` element to use an `onClick` event that calls `deletePostFn` off of `props`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `./src/components/App.js`. We'll need to update the `deletePost` method to make a `DELETE` request using `axios`. If we take a look at the API documentation we can see that the API expects a `DELETE` request at `https://practiceapi.devmountain.com/api/posts`. We can also see that the endpoint uses the request query to determine the `id` of the `post` to delete. Because the `id` of the `post` will be different every time we should use an `id` parameter for this method.

```js
deletePost( id ) {

}
```

We can then use the parameter to construct our `axios` request and use the returned data to update `posts` on `state`.

```js
deletePost( id ) {
  axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${ id }`).then( results => {
    this.setState({ posts: results.data });
  });
}
```

Now that our method is constructed, let's pass it down in the `Post` component in our `map`.

```js
{
  posts.map( post => (
    <Post key={ post.id }
          id={ post.id }
          text={ post.text}
          date={ post.date }
          updatePostFn={ this.updatePost }
          deletePostFn={ this.deletePost } />
  ))
}
```

We can then call this method and pass in the `post`'s `id` using an `onClick` event on the `Delete` `span`.

```js
<span onClick={ () => deletePostFn( id ) }>Delete</span>
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
import Compose from './Compose/Compose';
import Post from './Post/Post';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/api/posts').then( results => {
      this.setState({ posts: results.data });
    });
  }

  updatePost( id, text ) {
    axios.put(`https://practiceapi.devmountain.com/api/posts?id=${ id }`, { text }).then( results => {
      this.setState({ posts: results.data });
    });
  }

  deletePost( id ) {
    axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${ id }`).then( results => {
      this.setState({ posts: results.data });
    });
  }

  createPost() {

  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />
          
          {
            posts.map( post => (
              <Post key={ post.id }
                    id={ post.id }
                    text={ post.text}
                    date={ post.date }
                    updatePostFn={ this.updatePost }
                    deletePostFn={ this.deletePost } />
            ))
          }

        </section>
      </div>
    );
  }
}

export default App;
```

</details>

<details>

<summary> <code> ./src/components/Post/Post.js ( Post__master-menu ) </code> </summary>

```js
<div className="Post__master-menu" style={ { display: showMasterMenu ? 'flex' : 'none' } }>
  <span onClick={ this.showEdit }>Edit</span>
  <span onClick={ () => deletePostFn( id ) }>Delete</span> { /* Remember to destructure deletePostFn off of props or use this.props.deletePostFn */ }
</div>
```

</details>

<br />

<img src="https://github.com/DevMountain/react-3-afternoon/blob/solution/assets/5g.gif" />

## Step 6

### Summary

In this step, we'll create the `createPost` method to use `axios` to create a new `post` and also make the `Compose` button functional.

### Instructions

* Open `./src/components/App.js`.
* In the `createPost` method, use `axios` to send a `POST` request to the correct endpoint.
  * Remember that this method will need to work for any `post`. Hint: `function parameters`.
  * Use the returned data from the request to update `posts` on `state`.
* Pass the `createPost` method down as `prop` called `createPostFn` on the `Compose` component.
* Open `./src/components/Compose/Compose.js`.
* Update the `createPost` method to:
  * Call the `createPostFn` off of `props` with the correct `text` argument.
  * Use `setState` to reset the value of `text` on `state` to an empty string.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `./src/components/App.js`. We'll need to update the `createPost` method to make a `POST` request using `axios`. If we take a look at the API documentation we can see that the API expects a `POST` request at `https://practiceapi.devmountain.com/api/posts`. We can also see that the endpoint uses the request body to determine the `text` of the `post` to create. Because the `text` of the `post` will be different every time, we should use a `text` parameter for this method.

```js
createPost( text ) {

}
```

We can then use the parameter to construct our `axios` request and use the returned data to update `posts` on `state`.

```js
createPost( text ) {
  axios.post('https://practiceapi.devmountain.com/api/posts', { text }).then( results => {
    this.setState({ posts: results.data });
  });
}
```

Now that our method is constructed, let's pass it down in the `Compose` component.

```js
<Compose createPostFn={ this.createPost } />
```

We can then update the `createPost` method in `./src/components/Compose/Compose.js` to call `createPostFn` off of `props` with the value of `text` on `state`. After calling `createPostFn` we should also reset the value of `text` on `state` using `setState`.

```js
createPost() {
  const { text } = this.state;
  const { createPostFn } = this.props;

  createPostFn( text );
  this.setState({ text: '' });
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
import Compose from './Compose/Compose';
import Post from './Post/Post';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/api/posts').then( results => {
      this.setState({ posts: results.data });
    });
  }

  updatePost( id, text ) {
    axios.put(`https://practiceapi.devmountain.com/api/posts?id=${ id }`, { text }).then( results => {
      this.setState({ posts: results.data });
    });
  }

  deletePost( id ) {
    axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${ id }`).then( results => {
      this.setState({ posts: results.data });
    });
  }

  createPost( text ) {
    axios.post('https://practiceapi.devmountain.com/api/posts', { text }).then( results => {
      this.setState({ posts: results.data });
    });
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose createPostFn={ this.createPost } />
          
          {
            posts.map( post => (
              <Post key={ post.id }
                    id={ post.id }
                    text={ post.text}
                    date={ post.date }
                    updatePostFn={ this.updatePost }
                    deletePostFn={ this.deletePost } />
            ))
          }

        </section>
      </div>
    );
  }
}

export default App;
```

</details>

<details>

<summary> <code> ./src/components/Compose/Compose.js ( createPost method ) </code> </summary>

```js
createPost() {
  const { text } = this.state;
  const { createPostFn } = this.props;

  createPostFn( text );
  this.setState({ text: '' });
}
```

</details>

<br />

<img src="https://github.com/DevMountain/react-3-afternoon/blob/solution/assets/6g.gif" />

## Black Diamond

Update the project to allow the `Search` bar to find `posts` that contain a certain string. Example: If a user searchs for blue, the Feed of posts should only display posts that contain the word blue. To filter by multiple words be sure to use the `encodeURI` JavaScript function.

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>