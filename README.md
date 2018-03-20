# AutocompleteMalfunction

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Description

There are several issues I noticed with Material's autocomplete component that I'd like to report (I'm bringing them all up here because I think they're related). These essentially appear on iPad on landscape mode, due to the virtual keyboard taking most of the screen's space and tampering with the component's 'vital space', which triggers malfunctions.

Please find demos of the problematic behaviours attached to this issue.

First issue, which is actually the default behaviour of the component: the autocomplete panel may appear above the input and hide behind the browser's search bar. If you try this with Angular Material's own demo component (again, iPad, landscape mode), you'll see that the autocomplete panel appears way above the input bar and is completely unclickable without scrolling.

This triggers our second issue, which is that the autocomplete panel floats down and above the input, instead of scrolling down at the same time as the whole page. It disappears when you stop touching the screen, and reappears as floating above the input when you select the latter again. Please check the 1st video attached for example.

Another malfunction with the autocomplete on iPad is that, upon launching the autocomplete a second time, the hitbox seems to have moved away from the autocomplete panel. This doesn't seem to happen with Material's website as far as I can tell, but it does occur in the apps I developped (see repository + 2nd demo video attached), even though I basically used the same code as the Material website's.

If I click on option n°1, the autocomplete panel will close itself as if I had clicked out of the box. But when I select an option below -say, option n°3 or 4-, a different result is selected (option n°1 or 2 for instance). FYI, this has to do with the spacer div that I added below the form to mock the data I have on my main app.

I launched the app with Chrome, Firefox and Safari and got the same results each time.

Any thoughts on this? I can make a pull request if necessary.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
