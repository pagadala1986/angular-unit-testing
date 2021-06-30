# AngularUnitTesting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Documentation

Types of Test –

The all great developer knows his/her testing tools. Understanding your tools for testing is essential before diving into writing tests.
The Testing depends on your project requirements and the project cost. The types of Testing looks like -

1.         Unit Test
2.         Integration Test
3.         End to End (e2e) Test

What is Unit Test in Angular?

The Unit Test is used to test a single function, single components in Isolation. This is very fast.
The Unit Test is sometimes also called isolated testing

In this Test, we are not able to say that everything is alright in the application. Just for a single Unit or function assure that working fine

What Is Integration Testing in Angular?

The Integration Testing is used to test a component with templates and this testing contains more time as per comparison Unit Test.

What is End-to-End (e2e) Testing in Angular?
The End to End Testing is used to testing the entire application looks like -

1.            All User Interactions
2.            All Service Calls
3.            Authentication/Authorization of app
4.            Everything of App

This is the actual testing of your append it is fast action.
Unit testing and Integrations testing will do as fake calls but e2e testing is done with your actual Services and APIs calls.

\***\*\*\*\***Introduction\***\*\*\*\*\*\***

We can test our Angular applications from scratch by writing and executing pure JavaScript functions. Creating instances of the relevant classes, calling functions and checking the actual versus expected result.
But since testing is such a common activity with JavaScript there are a number of testing libraries and frameworks we can use which reduce the amount of time it takes to write tests.
Two such tools and frameworks that are used when testing Angular are Jasmine and Karma and a discussion of those is the topic of this lecture.

\***\*\*\*\*** Angular testing utilities\***\*\*\*\*\***

The Angular testing utilities help to create a testing environment that makes writing tests for your various constructs really easy. It consists of the TestBed class and various helper functions, found under the @angular/core/testing namespace. Let’s have a look at what these are and how they can help us to test various constructs. We will shortly introduce the most commonly used concepts so that you are familiar with them as we present them more deeply further on:

The TestBed class is the most important concept and creates its own testing module. In reality, when you test out a construct to detach it from the module it resides in and reattach it to the testing module created by the TestBed. The TestBed class has a configureTestModule() helper method that we use to set up the test module as needed. The TestBed can also instantiate components.
ComponentFixture is a class wrapping the component instance. This means that it has some functionality on it and it has a member that is the component instance itself.

The DebugElement, much like the ComponentFixture, acts as a wrapper. It, however, wraps the DOM element and not the component instance. It’s a bit more than that though, as it has an injector on it that allows us to access the services that have been injected into a component.

**\*\*\*** Learning Objectives **\***

What is the Jasmine test framework?
How to write tests in Jasmine?
What is the Karma test runner?
How to create and run tests using the Angular CLI?
