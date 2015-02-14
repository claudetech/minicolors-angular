# minicolors-angular

Simple wrapper for [jquery-minicolors](https://github.com/claviska/jquery-miniColors/).

## Installation

```sh
$ bower install minicolors-angular
```

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
