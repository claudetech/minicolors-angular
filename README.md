# minicolors-angular

Simple wrapper for [jquery-minicolors](https://github.com/claviska/jquery-miniColors/).

## Installation

Run

```sh
$ bower install minicolors-angular
```

then add `jquery.minicolors.css`, `jquery.minicolors.js` and `minicolors.angular.js` to your HTML.

## Usage

Add `minicolors` module to your app:

```javascript
angular.module('myApp', ['minicolors'])
```

Add the directive to your `input` element as a class or an attribute,
and pass options throught the options attribute.

```html
input.minicolors(ng-model="color" options="{showSpeed: 50}")
```
