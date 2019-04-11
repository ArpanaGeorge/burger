# burger

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* App will store every burger in a database, whether devoured or not.

## Program Logic

* imported express, body-parser,express-handlebars, method-override
* Served static content for the app from the "public" directory in the application directory.
* Parsed application body as JSON
* Set Handlebars.
* Imported routes and give the server access to them.
* Made connection and Exported connection for our ORM to use.
* Used selectall() orm function which willexecute 'SELECT * FROM' SQL command to dispaly burger list from db
* Used insertone() orm function which will execute 'INSERT INTO' SQL command to create a new burger record in the db
* Used update() orm function which will execute 'UPDATE ?? SET devoured=true/false' FROM SQL command to position the burger to LHS or RHS depending on whether devoured=true/false.
* used handlebars for UI