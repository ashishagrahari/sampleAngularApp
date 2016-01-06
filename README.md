# sample-app
- This is a simple angular application. It consists of two views, Home and Contact.  
- Angular route has been used to switch between the routes.  
- Each route consist of its own controller and HTML template file.  
- There is one service defined which is used to get the data in async manner.  
- There is one directive which creates the tabular format on the home view. It takes the products array as an input and creates the table out of it.  
- Contact view consists of a form which only submits the form when all the validations are met.  

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
Note: Test files are created but test cases are not there currently.
