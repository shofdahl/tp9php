// JavaScript for TP9

// AJAX function
function loadFileInto(recipeID, listName, whereTo) {

	// 1. creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();
	
	// 2. define the fromFile variable with the passed recipe name and list
	fromFile = "recipes.php?recipeID=" + recipeID + "&recipeList=" + listName;
	
	console.log("From URL: " + fromFile); // output the URL result to the browser's devtools console

	// 3. defines the GET/POST method, the source, and the async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// 4. provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {

		if ((this.readyState == 4) && (this.status == 200)) { // if .readyState is 4, the process is done; and if .status is 200, there were no HTTP errors

			console.log("AJAX response: " + this.responseText);
		
			if (this.responseText != 0) {
				// parse the JSON into an array
				responseArray = JSON.parse(this.responseText);

				// loop through the array to build up <li> tags for the list
				responseHTML = "";
				for (x=0; x < responseArray.length; x++) {
						responseHTML += "<li>" + responseArray[x] + "</li>";
				}

				// update the DOM with the responseHTML
				document.querySelector(whereTo).innerHTML = responseHTML;
				
			} else {
				console.log("Error: no recipe/list found.");	
			}

		} else if ((this.readyState == 4) && (this.status != 200)) { // if .readyState is 4, the process is done; and if .status is NOT 200, output the error into the console

			console.log("Error: " + this.responseText);

		}

	} // end ajax.onreadystatechange function

	// 5. let's go -- initiate request and process the responses
	ajax.send();

}


// recipe object constructor //
function Recipe(recipeName, contributorName, imgURL, recipeID) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imgURL = imgURL;
  this.id = recipeID;
  
  this.displayRecipe = function() {
    
    layoutTitle = document.querySelectorAll("#titleBanner h1");
    layoutTitle[0].innerHTML = this.recipeName;

    layoutContributor = document.querySelectorAll("#titleBanner h4");
    layoutContributor[0].innerHTML = "Contributed by " + this.contributor;

    document.getElementById("titleBanner").style.backgroundImage = "url(" + this.imgURL + ")";
    
    loadFileInto(this.id, "ingredients", "#ingredients ul");
    loadFileInto(this.id, "equipment", "#equipment ul");
    loadFileInto(this.id, "directions", "#directions ol");
    
  }
  
}

BananaBread = new Recipe(
  "Banana Bread", 
  "Serena",
  "https://images.unsplash.com/photo-1621994153189-6223b41f7912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "bananaBread"
);


Pancakes = new Recipe(
  "Old Fashioned Pancakes",
  "Maddy Szczypka", 
  "https://images.unsplash.com/photo-1590137876181-2a5a7e340308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  "pancakes"
);

FrenchToast = new Recipe(
  "French Toast", 
  "Analysse Palomares", 
  "https://images.unsplash.com/photo-1639108094328-2b94a49b1c2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "frenchToast"

);


window.onload = function() {
 
  
 document.querySelector("#firstRecipe").onclick = function() {
   BananaBread.displayRecipe();
 }
  
   
 document.querySelector("#secondRecipe").onclick = function() {
   Pancakes.displayRecipe();
 }
 
    
 document.querySelector("#thirdRecipe").onclick = function() {
   FrenchToast.displayRecipe();
 }
 
} //end window.onload
