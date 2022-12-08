<?

// recipe response php file for tp9-PHP 

$recipes = array();

$recipes["bananaBread"] = array();
$recipes["bananaBread"]["ingredients"] = array();
$recipes["bananaBread"]["equipment"] = array();
$recipes["bananaBread"]["directions"] = array();

$recipes["bananaBread"]["ingredients"][] = "2-3 overripe bananas";
$recipes["bananaBread"]["ingredients"][] = "1/3 cups of unsalted butter, melted";
$recipes["bananaBread"]["ingredients"][] = "1/2 teaspoon of baking soda";
$recipes["bananaBread"]["ingredients"][] = "1 pinch of salt";
$recipes["bananaBread"]["ingredients"][] = "3/4 cup of brown sugar";
$recipes["bananaBread"]["ingredients"][] = "1 egg, beaten";
$recipes["bananaBread"]["ingredients"][] = "1 teaspoon of vanilla extract";
$recipes["bananaBread"]["ingredients"][] = "1 + 1/2 cups of all purpose flour";
$recipes["bananaBread"]["ingredients"][] = "1 cup of chocolate chips (optional)";

$recipes["bananaBread"]["equipment"][] = "Oven";
$recipes["bananaBread"]["equipment"][] = "8-inch by 4-inch loaf pan";
$recipes["bananaBread"]["equipment"][] = "Measuring cups and spoons";
$recipes["bananaBread"]["equipment"][] = "Large mixing bowl";
$recipes["bananaBread"]["equipment"][] = "Fork";

$recipes["bananaBread"]["directions"][] = "Preheat oven to 350 degrees F (175 degrees C).";
$recipes["bananaBread"]["directions"][] = "Butter 8-inch by 4-inch inch loaf pan.";
$recipes["bananaBread"]["directions"][] = "Mash banannas with a fork in a large mixing bowl untill completely smooth.";
$recipes["bananaBread"]["directions"][] = "Stir in melted butter into the mashed bananas";
$recipes["bananaBread"]["directions"][] = "Mix in baking soda and salt.";
$recipes["bananaBread"]["directions"][] = "Stir in sugar, beatten egg, and vanilla extract until evenly distributed.";
$recipes["bananaBread"]["directions"][] = "Mix in flour until combined.";
$recipes["bananaBread"]["directions"][] = "Add and stir in chocolate chips, if desired.";
$recipes["bananaBread"]["directions"][] = "Pour batter into loaf pan.";
$recipes["bananaBread"]["directions"][] = "Bake for 55-65 minutes at 350 degrees F, or until a toothpick inserted in the center comes out clean.";
$recipes["bananaBread"]["directions"][] = "Remove from oven, and let cool for 5 minutes.";
$recipes["bananaBread"]["directions"][] = "Cut, serve, and enjoy!";

$recipes["pancakes"] = array();
$recipes["pancakes"]["ingredients"] = array();
$recipes["pancakes"]["equipment"] = array();
$recipes["pancakes"]["directions"] = array();

$recipes["pancakes"]["ingredients"][] = "1½ cups all-purpose flour";
$recipes["pancakes"]["ingredients"][] = "3½ teaspoons baking powder";
$recipes["pancakes"]["ingredients"][] = "1¼ teaspoons salt, or more to taste";
$recipes["pancakes"]["ingredients"][] = "1¼ cups milk";
$recipes["pancakes"]["ingredients"][] = "1 tablespoon white sugar";
$recipes["pancakes"]["ingredients"][] = "3 tablespoons butter, melted";

$recipes["pancakes"]["equipment"][] = "Stove";
$recipes["pancakes"]["equipment"][] = "Frying pan";
$recipes["pancakes"]["equipment"][] = "Measuring cups";
$recipes["pancakes"]["equipment"][] = "Spatula";
$recipes["pancakes"]["equipment"][] = "Spoon";
$recipes["pancakes"]["equipment"][] = "Large bowl";
$recipes["pancakes"]["equipment"][] = "Sifter";

$recipes["pancakes"]["directions"][] = "In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.";
$recipes["pancakes"]["directions"][] = "Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.";

$recipes["frenchToast"] = array();
$recipes["frenchToast"]["ingredients"] = array();
$recipes["frenchToast"]["equipment"] = array();
$recipes["frenchToast"]["directions"] = array();

$recipes["frenchToast"]["ingredients"][] = "1/4 cup all-purpose flour";
$recipes["frenchToast"]["ingredients"][] = "1 cup milk";
$recipes["frenchToast"]["ingredients"][] = "3 eggs";
$recipes["frenchToast"]["ingredients"][] = "1 tablespoon white sugar";
$recipes["frenchToast"]["ingredients"][] = "1 teaspoon vanilla extract";
$recipes["frenchToast"]["ingredients"][] = "1/2 teaspoon ground cinnamon";
$recipes["frenchToast"]["ingredients"][] = "1 pinch salt";
$recipes["frenchToast"]["ingredients"][] = "12 thick slices of bread";
$recipes["frenchToast"]["ingredients"][] = "Oil";

$recipes["frenchToast"]["equipment"][] = "Stove";
$recipes["frenchToast"]["equipment"][] = "Measuring cups";
$recipes["frenchToast"]["equipment"][] = "Large Mixing Bowl";
$recipes["frenchToast"]["equipment"][] = "Whisk";
$recipes["frenchToast"]["equipment"][] = "Griddle or Frying pan";

$recipes["frenchToast"]["directions"][] = "Measure all-purpose flour and pour into large mixing bowl.";
$recipes["frenchToast"]["directions"][] = "Slowly whisk in milk, eggs, sugar, vanilla extract, cinnamon, and salt until the consistancy is smooth.";
$recipes["frenchToast"]["directions"][] = "Lightly oil a griddle or frying pan over medium heat.";
$recipes["frenchToast"]["directions"][] = "Soak the bread slices into the milk mixture.";
$recipes["frenchToast"]["directions"][] = "Cook the bread slices on the griddle or frying pan. Make sure each side of the bead is golden brown";
$recipes["frenchToast"]["directions"][] = "Serve while still hot!"

// end array recipe stuff




//Use either $_GET[] or $REQUEST[] superglobal arrays to access perameters

$requestedID = $_GET["recipeID"];
$requestedID = htmlspecialchars($requestedID);
$requestedID = filter_var($requestedID, FILTER_SANITIZE_STRING);

$requestedList = $_GET["recipeList"];
$requestedList = htmlspecialchars($requestedList);
$requestedList = filter_var($requestedList, FILTER_SANITIZE_STRING);


$requestedOutput = $recipes[$requestedID][$requestedList];

//no output default
$requestedJSON = "0";

//if $requestedOutput is not nothing, then encode it as JSON
if ($requestedOutput != null) {
  $requestedJSON = json_encode($requestedOutput);
}

echo $requestedJSON;





