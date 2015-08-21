
### What is angular

*   Angular is a framework written in javascript that enables developers
to create dynamic, fast, single page applications in a fraction of the time.

### Why learn angular over other popular frameworks??

*  Everything is easily testable.
*  Angular $watches things, via two way data binding, and unless that watch
  becomes DIRTy, it will not change.. once it does that dom element
  or w/e it is.. changes with it.
* Angular requires less code, and is more intuitive than its competitors.
* Its a living template engine vs a widget builder like like Backbone.js.  So
 it is more flexible and powerful.
* It has a large community, so as a dev you have more resources to lean on.
* Its elegant and intuitive that the view tells us what is supposed to happen.  Really awesome for sharing code on a team.

### Three common complaints about Angular:
* Due to the learning curve for Angular, its amazing to start, but the more complex your application gets, the harder it is to find documentation and resources, and solutions ramp up quickly

* Scope is sort of... messy. You need to actually inspect the directive code to know what a variable binding is actually doing.

* You can't use Jquery to manipulate the DOM ...everyone seems to try..?

* If there is code "outside" of Angular.. you need to use $scope.apply to tell angular to react to the event and effectively $watch it.  Could get confusing.

* If you need to apply something to an ng-repeat.. you need to use a parent element.. adding it directly to ng-repeat messes it up.

### Is Angular a MVC framework?
* Angular is a mix of model view controller and model-view-view model..depending on your preference,style, and needs.


### Is jQuery actually a dependency?
* JQuery can be included when bootstrapping...because Angular makes use of it. HOWEVER, if you do NOT include it.. Angular falls back to its own version of JqLite... So, it relies on some version of Jquery.. but whether or not you add it yourself is up to you.


### Ng-App
* ng-app is placed at the begginning of an angular app page. It designates the root of the angular application and can only be used once.

### What is ng?
* ng is abbreviation for angular and referencing it gives you access to its directives.


### What does ng-model do?
* ng-model is a directive that binds different types of inputs to a property on the scope using a controller.
### What is "dirty checking"?
* angular has a 'digest cycle' which is like a watcher loop that constantly monitors variables in its scope for changes. So
using $scope on a variable will tell angular to monitor that variable on each iteration of the loop.  Its realtime updating.
Its a dirty field if its value has changed.
### Find a way to set the initial value of "name" as "BoJack" (without writing a controller).
* `ng-init="name='Bojack'"`
### What are those {{ }} expressions? Are they Handlebars?
* Directive — An attribute or element that augments an existing DOM element or represents a reusable DOM component.
* Markup — The double curly brace notation {{ }} to bind expressions to elements is built-in Angular markup.

    `var $interpolate = ...; // injected`

    `var exp = $interpolate('Hello {{name | uppercase}}!');`

    `expect(exp({name:'Angular'}).toEqual('Hello ANGULAR!');`


* Filter — Formats data for display.
* Form controls — Validates user input.



### Explain what 2-way data binding is.
* 2 way data binding in angular is the syncronization of data between the view and model... the digest loop continually checks for dirty changes, cross references them against the previous values on that object.. and if there are changes..they are recorded.  ( I believe the digest loop returns from every change in order to check if that changes has affected any other values that have preceded it in the loop.)
### BONUS: Research the $digest loop
* the $watch method of the $scope object sets up a dirty check...
* Any time something "happens" angular creates an event object, which is a list of all functions that are listening for these events, it runs over the list to check for "Dirty" values to update the app.
* This is the internal Angular Event Loop
*  These $watch lists are resolved in the $digest loop through a process called dirty checking.
* Values are put on a $watch in a $watchList and if a value has not changed it skips to the next watch and checks it, if it has changed then it records that change, updates, and continues down the list.
