### Using Windsurf to Create a Chrome Extension to Email the Current Page URL to Myself

#### Install the following tools:
    Install the Windsurf Extension for PyCharm or IntelliJ.

#### Create a New PyCharm or IntelliJ Project

#### Enter the below prompt in the Windsurf Panel(Press C-Shift I):
    Create a Chrome extension that will email the link of the currently open site to myself 

#### Accept all recommended edits from Windsurf
     You should have the following files in your project:
        - manifest.json
        - popup.html
        - popup.js

#### Create an images folder
    Copy the images folder from this repository or create a new set using the .make_icons.sh script

#### Load the extension into Chrome
    Click on Chrome Hamburger Menu(on upper right corner) > Extensions > Manage Extensions 

    Click on the "Load Unpacked" button and select the Project Directory

    Now, go back to the browser and click on the "Extensions" button on the upper right corner
    to bring up the list of installed extensions

    Click on the Pin next to the extension name to pin it to the top of the list

#### Test(and Debug) the Extension
    Open www.nytimes.com and click on the "Email This Page" button

    It should open the popup and ask for an email address

    Enter your email address and click on the "Send" button

    If the extension does not work, try the following:
        - Check for errors on the Chrome Extensions UI
            - go to Chrome Hamburger Menu > Extensions > Manage Extensions 
            - look for errors next to the extension name
        - Compare your project files with the ones in this repository
    
    If the mailto: link does not work, try the following:
    Open chrome and enter 
    chrome://settings/handlers
    Ensure that "Sites can ask to handle protocols" is enabled
        - Under "email", you should see "mail.google.com" in the list
    
    

