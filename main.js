
// Create the script element
var darkReaderScript = document.createElement('script');
darkReaderScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/darkreader/4.9.58/darkreader.js';
darkReaderScript.integrity = 'sha512-SVegqt9Q4E2cRDZ5alp9NLqLLJEAh6Ske9I/iU37Jiq0fHSFbkIsIbaIGYPcadf1JBLzdxPrkqfH1cpTuBQJvw==';
darkReaderScript.crossOrigin = 'anonymous';
darkReaderScript.referrerPolicy = 'no-referrer';

// Append the script element to the head section
document.head.appendChild(darkReaderScript);


// Code to be executed every second
function runEverySecond() {
  // Your code here
  DarkReader.enable();

if (DarkReader.isEnabled()) {
    clearInterval(interval); // Stop the interval timer
}
    
}

// Start the interval timer
var interval = setInterval(runEverySecond, 1);


// this is a update

