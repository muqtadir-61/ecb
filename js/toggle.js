// Get the trigger button elements
const toggleBtn = document.querySelector('#toggle-btn');
const toggleBtn2 = document.querySelector('#toggle-btn2');
const toggleBtn3 = document.querySelector('#toggle-btn3');
const toggleBtn4 = document.querySelector('#toggle-btn4');

// Get the content elements that will be toggled
const toggleContent = document.querySelector('#toggle-content');
const toggleContent2 = document.querySelector('#toggle-content2');
const toggleContent3 = document.querySelector('#toggle-content3');
const toggleContent4 = document.querySelector('#toggle-content4');

// Set up a variable to keep track of the toggle state
let isContentVisible = false;
let isContentVisible2 = false;
let isContentVisible3 = false;
let isContentVisible4 = false;

// Add a click event listener to each trigger button
toggleBtn.addEventListener('click', () => {
  // Hide all other content elements
  hideAllToggleContent();

  // Toggle the visibility of the content element
  isContentVisible = !isContentVisible;
  
  // Add or remove the 'hidden' class based on the toggle state
  if (isContentVisible) {
    toggleContent.classList.remove('hidden');
    toggleBtn.classList.add('selected');
    
  } else {
    toggleContent.classList.add('hidden');
    toggleBtn.classList.remove('selected');
    
  }
});

toggleBtn2.addEventListener('click', () => {
  // Hide all other content elements
  hideAllToggleContent();

  // Toggle the visibility of the content element
  isContentVisible2 = !isContentVisible2;
  
  // Add or remove the 'hidden' class based on the toggle state
  if (isContentVisible2) {
    toggleContent2.classList.remove('hidden');
    toggleBtn2.classList.add('selected');
    
    
  } else {
    toggleContent2.classList.add('hidden');
    toggleBtn2.classList.remove('selected');
   
  }
});

toggleBtn3.addEventListener('click', () => {
  // Hide all other content elements
  hideAllToggleContent();

  // Toggle the visibility of the content element
  isContentVisible3 = !isContentVisible3;
  
  // Add or remove the 'hidden' class based on the toggle state
  if (isContentVisible3) {
    toggleContent3.classList.remove('hidden');
    toggleBtn3.classList.add('selected');
    
  } else {
    toggleContent3.classList.add('hidden');
    toggleBtn3.classList.remove('selected');
   
  }
});

toggleBtn4.addEventListener('click', () => {
  // Hide all other content elements
  hideAllToggleContent();

  // Toggle the visibility of the content element
  isContentVisible4 = !isContentVisible4;
  
  // Add or remove the 'hidden' class based on the toggle state
  if (isContentVisible4) {
    toggleContent4.classList.remove('hidden');
    toggleBtn4.classList.add('selected');
    
  } else {
    toggleContent4.classList.add('hidden');
    toggleBtn4.classList.remove('selected');
   
  }
});

// Function to hide all toggle content elements
function hideAllToggleContent() {
  isContentVisible = false;
  isContentVisible2 = false;
  isContentVisible3 = false;
  isContentVisible4 = false;
  
  toggleContent.classList.add('hidden');
  toggleContent2.classList.add('hidden');
  toggleContent3.classList.add('hidden');
  toggleContent4.classList.add('hidden');

  toggleBtn.classList.remove('selected');
  toggleBtn2.classList.remove('selected');
  toggleBtn3.classList.remove('selected');
  toggleBtn4.classList.remove('selected');
}





function showSocialMedia() {
  var popup = document.getElementById("social-media-popup");
  popup.style.display = "block";
}

function closeSocialMedia() {
  var popup = document.getElementById("social-media-popup");
  popup.style.display = "none";
}