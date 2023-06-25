// Event listener for when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed or updated.');
  });
  
  // Event listener for incoming messages from content scripts or other parts of the extension
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Handle the received message
    console.log('Received message:', message);
  
    // Send a response back to the sender
    sendResponse('Message received successfully.');
  });
  
  // Other extension logic and event listeners can be added here
  