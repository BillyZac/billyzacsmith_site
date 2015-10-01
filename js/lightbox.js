// Create a "lightbox" that gives more info on the selected project when you click on an image



var $overlay = $('<div id="overlay"></div>'); // Create a div for the lighbox overlay.

var content = "nothing yet"; // the lightbox content, which will be placed inside the overlay
var clicked = ''; // For caching clicked link
var link = '';

//Hide the description paragraphs
$(".description").hide();

// Add overlay to page
$("body").append($overlay); //overlay is put onto the page by appending to the <body>

$("#overlay").hide(); // The overlay is initially hidden.

// When a gallery image is clicked
$(".gallery-link").click(function(event) {

  //Prevent from going to the image dead end.
  event.preventDefault(); 

  // Remember which link was clicked
  clicked = $(this);
  
  // Select the description div inside the link, which contains the description text
  content = $(this).children(".description");

  // Get the original link, and prepare it to be formatted
  link = '<p id="link"><a href="' + clicked.attr("href") + '">View project</a></p>';

  content.children("p").last().append(link); // Put the link at the end of the last paragraph 

  // Add the content to the overlay
  $overlay.append(content);  



  //show the overlay and make the description visible
  $overlay.show();
  content.show();
    

});

//When overlay is clicked 
$overlay.click(function() {
  //Hide the overlay
  $overlay.hide();  
  // Clear the the overlay by moving the description back inside the <a>
  clicked.append(content);
  //Hide the description
  content.hide();
  
  // Remove the link from the content
  $("#link").detach();
  
});
