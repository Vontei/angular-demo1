# 1.1

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

# 1.2
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


### Notes:
* you cannot write loops or conditionals inside angular expressions: {{}} ... angular has its own way of dealing with those things.

# 1.3

### What are Angular expressions? How do they compare to EJS/ERB tags?
* {{}} vs <% %>   Erb tags  are interpreted server side before it hits angular.  Expressions are evaluated in the digest loop (two way data binding) on the client.

### What happens when you write invalid code in an expression?
* Its pretty awesome, it immediately breaks all expressions. I think the $digest loop breaks on return until it is fixed..thus Angular stops in its tracks.

### What type of error do you get?

* I got a [$parse: syntax] error.  The expression was not parsed correctly according to angulars rules and thus cannot be evaluated.  The REGEX breaks, and then it can't compile.

### What are Angular filters? Name 4 built-in filters, including one that we haven't used yet.

* Filters format an expression to a particular, desired display, to the user.
* Min , max, number, trim, currency, reverse, uppercase, degrees, startsWith, remove, fuzzy, etc. AWESOMEEENESSSS

### We'll soon see how to create custom filters. What is a use case for a custom filter?

# 1.4

### What is $scope?
* $scope is an angular object, and technically a service,  that defines the scope of the controller it is passed to.  In use, it would be called dependency injection, where $scope is an angular object being passed to a function.  Passing objects to functions is the premise of dependency injection. Its a simple concept but a powerful one.  Objects a dynamic, mutable, and change over time, (as your models and data change). Being able to pass those to a function rather than defining them inside the scope of the function, is advantageous.

### What are Angular modules?
* A module is a collection of configurations and code blocks that are applied to your application.  Modules are containers for different parts of your application, services, controllers, directives, filters, and so on. Using the ng-app directive in you html file will connect the specified module to your view.

### Why do we pass in $scope as an argument to controller functions?
* Directive declare the $watch expressions.. and tell the $watchList what to track. Those expressions are bound to a particular scope that is declared by the controller. Passing the angular $scope object, more or less instantiates a new scope for that particular controller, both in the module, and in the view. It creates a specified storage area to for that controller to reference data  that only IT cares about.


### In Express, what are angular controllers most analogous to?
* Controllers are similar to routes or to controllers folders in a standard MVC framework.. they define a certain scope for the data and view they are linked to.  Routes call data, clean and define it in some way.. and them pass the data as an object to the view.  Controllers in angular are similar, except they can be even more specific.. in that they can render multiple views on one page, while maintaining their own scope..  and Boom..the single page app is born.


### Why use ng-src and ng-href?
* `<img ng-src="http://www.gravatar.com/avatar/{{hash}}" alt="Description" />`
ng-src is angular's built in directive for images.  It is most important when adding angular markup or expressions to a src path.
angular needs a way to recognize it, thus it has its own directive.

* <a ng-href="http://www.gravatar.com/avatar/{{hash}}">link1</a>
Its a similar problem with href.  Angular needs to identify its own expression before the user clicks it and it directs to a broken link.  Using ng-href ensures that angular will watch that link for a click event and direct it appropriately.

# 1.5

### What are directives?
* Directives are angular verbs.  They allow angular to connect controllers and models to views.  They are predefined attributes placed in HTML tags which tell angular what to do and how.  You can also, however, create custom directives... a key difference between angular and other competitors like Knockout.js. You can also use directives like xml or html markup itself. Its easier to read as long as the naming conventions and overall architecture are taken into consideration. Pretty Awesome.

### Does ng-class require an object to be passed in?
* No, i do not believe that is the case.  ng-class can evaluate a string, object, or array. ng-class='style' or ng-class='{style: something == true}'.  Pretty awesome.  There are rules about naming conventions such as: when using a string... chaining multiple classes must be done with delimited spaces. Pretty straightforward, and the docs are explicit.

### What order does an ng-repeat display items in?
* When iterating over objects.. in 1.3 angular returns the keys alphabetically. Now in most recent versions, it is determined by the browser, and the browser more often than not, will return them in the order in which they were defined.

### How does ng-repeat handle duplicate data?
* When the contents of the collection change, ngRepeat makes the corresponding changes to the DOM:

* When an item is added, a new instance of the template is added to the DOM.
When an item is removed, its template instance is removed from the DOM.
When items are reordered, their respective templates are reordered in the DOM.
By default, ngRepeat does not allow duplicate items in arrays. This is because when there are duplicates, it is not possible to maintain a one-to-one mapping between collection items and DOM elements.

* If you do need to repeat duplicate items, you can substitute the default tracking behavior with your own using the track by expression.

* For example, you may track items by the index of each item in the collection, using the special scope property $index.


# 1.6

### Why does number update in the template without us telling it to?
* Setting the function in the same controller gives us access to its $scope variables and functions. Thus, calling a function in that controller that changes the number allows us to actively change it because the data is bound.  The {{number}} expression is bound to $scope.number,  which is then changed by the function in the same controller.  It is bound, and in every churn of the $digest loop the $watch is updated. 
