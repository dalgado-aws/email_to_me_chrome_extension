document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('email');
  const saveButton = document.getElementById('saveEmail');
  const savedEmailDiv = document.getElementById('savedEmail');

  // Load saved email from storage
  chrome.storage.sync.get(['userEmail'], function(result) {
    if (result.userEmail) {
      emailInput.value = result.userEmail;
      savedEmailDiv.textContent = `Using: ${result.userEmail}`;
    }
  });

  saveButton.addEventListener('click', function() {
    const email = emailInput.value.trim();
    
    // Simple email validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address');
      return;
    }

    // Save email to Chrome's storage
    chrome.storage.sync.set({ userEmail: email }, function() {
      savedEmailDiv.textContent = `Using: ${email}`;
      
      // Get the current tab's URL and title
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs[0]) {
          const tab = tabs[0];
          const subject = encodeURIComponent(`__incoming_for_sorting: : ${tab.title}`);
          const body = encodeURIComponent(`I found this interesting and wanted to share it with you:\n\n${tab.url}\n\n`);
          
          // Create mailto link
          const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
          
          // Open default email client
          window.open(mailtoLink);
        }
      });
    });
  });
});
