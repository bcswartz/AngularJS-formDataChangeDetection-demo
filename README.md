# AngularJS-formDataChangeDetection-demo

This demonstration was first created in January 2014 on a personal web server as the first of a few demos around AngularJS.
It was moved to GitHub to preserve it.

The purpose of the demo was to illustrate that while AngularJS contains core directives and methods for inspecting the 
change state of form fields, you have to do some extra work if you want to determine if the data in the actual model has
changed since the page was loaded (and possibly changed back to a pristine state).

The demo consists of three examples.  

The first example demonstrates how form change detection continues to mark a form field
as dirty even if the user restores the form field to its original value, and how certain changes to the data model (like
reordering a list via a drag-and-drop mechanism) are not reflected by the form state.

The second example illustrates how to correct most of the shortcomings of the first example by cloning the data model before
the view is rendered and then comparing that clone to the current model data to see if changes have occurred.

The third example corrects a shortcoming of the second example when it comes to numeric fields:  the data model may initially
contain a numeric value, but once the user changes that value in the form the value is saved back to the model as a string, so 
that has to be accounted for.

The demo is available at: https://bcswartz.github.io/AngularJS-formDataChangeDetection-demo
