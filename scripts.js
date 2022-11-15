// JavaScript for TP9

// function to load a file name from the URL "fromFile" into the object identified by "whereTo" //
function loadFileInto(recipeID, listName, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();
  
    // define the fromFile variable
  fromFile = "recipes.php?recipeID=" + recipeID + "&recipeList=" + listName;
  console.log("From URL: " + fromFile);
  
	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
    
    //positive response text
    
			if ((this.readyState == 4) && (this.status == 200)) {
        
        console.log("AJAX response: " + this.responseText);
        
        if (this.responseText != 0) {
          responseArray = JSON.parse(this.responseText);
          
        responseHTML = "";
          for (x=0; x < responseArray.length; x++) {
            responseHTML += "<li>" + responseArray[x] + "</li>";
          }
          document.querySelector(whereTo).innerHTML = responseHTML;
          
        } else {
          console.log("Error: no recipe/list found.");
        }
        
        // positive response end
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}

// generic recipe object constructor //

function Recipe(recipeTitle, recipeImageSrc, recipeContributor, RecipeID) {
  
  this.title = recipeTitle;
  this.imgSRC = recipeImageSrc;
  this.contributor = ingredientsURL;
  this.id = recipeID;
  
  this.displayRecipe = function() {
    
    layoutTitle = document.querySelectorAll("#titleBanner h1");
    layoutTitle[0].innerHTML = this.title;
    
    layoutContributor = document.querySelectorAll("#titleBanner h4");
    layoutContributor[0].innerHTML = "Contributed By" + this.contributor;
    
    document.getElementById("TitleBanner").style.backgroundImage = "url(" + this.image.Src + ")";
    
    loadFileInto(this.recipe, "ingredients", "#ingredients ul");
    loadFileInto(this.recipe, "equipment", "#equipment ul");
    loadFileInto(this.recipe, "directions" ,"#directions ol");
  }
}

BananaBread = new Recipe(
  "Banana Bread", 
  "https://images.unsplash.com/photo-1621994153189-6223b41f7912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "Serena",
  "bananaBread"
);


Pancakes = new Recipe(
  "Old Fashioned Pancakes", 
  "https://images.unsplash.com/photo-1590137876181-2a5a7e340308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  "Maddy Szczypka", 
  "pancakes"
);

FrenchToast = new Recipe(
  "French Toast", 
  "https://images.unsplash.com/photo-1639108094328-2b94a49b1c2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
   "Analysse Palomares", 
  "frenchToast"

);



window.onload = function() {

}


