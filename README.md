**Run the application**  
Clone the application to any folder and change the directory path to `mySpares-assignment/mySparesApp`  
Checkout develop branch.
Run the command `npm install`, this will install all the dependencies needed to run the angular application.  
Run the command `ng serve`, angular application will start running on port 4200. In browser open `http://localhost:4200/`  


1. Creaated a component spare-parts to render the list of spare parts.
2. On ngOnInit method of the spare-parts component loade the spare parts list json data from the assets folder.
3. Stored a list of json object to display the headrs in the table.
4. For every header in the displaying the value from the object.
5. Search on every key change we are iterating throught the spareParts list and if the entered text matches any value in each object of spareParts list adding them to search results.
