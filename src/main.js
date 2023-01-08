// Import the gitCommands array from the commands.js file
import { gitCommands } from "./commands.js";

// Define an array of problematic words that should not be interpreted as HTML elements
const problematicWords = ["directory","git-dir","mode","branch", "depth", "old-branch", "new-branch","remote", "file", "start-point", "message", "repository", "new-message", "name", "email", "tag", "new-base", "old-base", "pattern"];

// Takes an array of commands and returns a string with each command and its explanation on a separate line
function createCommandText(array) {
    return array.map(command => `//${command.explanation}\n${command.command}\n`).join('\n');
}

// Replaces all occurrences of the specified word surrounded by < and > in the text with &lt; and &gt;
function replaceElements(word, text){
    return text.replace(new RegExp(`<${word}>`, "g"), `&lt;${word}&gt;`);
}

// Formats the text block to make it easier to read
function styleWords(){
    // Get the text content of the #code element
    let text = document.querySelector("#code").textContent;

    // Replace all occurrences of the problematic words with their HTML entity counterparts
    problematicWords.forEach(w => {
        text = replaceElements(w, text);      
    });

    // Split the text into an array of lines
    const lines = text.split('\n');

    // Style the lines of text
    const styledLines = lines.map((line) => {
        if(line.startsWith("//"))
        {
            // If the line starts with //, style it green
            return `<span style="color: green;">${line}</span>`;
        }
        else if(line.startsWith("git")){
            // If the line starts with git, style the word git orange
            const words = line.split(' ');
            if(words[0] === "git"){
                words[0] = `<span style="color: orange;">git</span>`;
            } 
            return words.join(' ');
        }
        // Otherwise, return the line as-is
        return line;
    });
    // Join the styled lines back into a single string
    text = styledLines.join('\n');

    // Set the innerHTML of the #code element to the styled text
    document.querySelector('#code').innerHTML = text;
} 

// Log the gitCommands array to the console
console.log(gitCommands);

// Get the code element
let codeElement = document.querySelector("code");

// Set the text content of the code element to the command text generated from the gitCommands array
codeElement.textContent = createCommandText(gitCommands);

// Style the text in the code element
styleWords();
