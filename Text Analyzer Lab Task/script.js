function analyzeText() {

    let text = document.getElementById("textInput").value;

    // Trim spaces
    let trimmedText = text.trim();

    // Handle empty input
    if (trimmedText === "") {
        alert("Please enter some text");
        return;
    }

    // Character count
    let charCount = trimmedText.length;

    // Word count (handle multiple spaces)
    let words = trimmedText.split(/\s+/);
    let wordCount = words.length;

    // Reverse text
    let reversedText = trimmedText.split("").reverse().join("");

    // Display result
    document.getElementById("result").innerHTML =
        "<b>Character Count:</b> " + charCount + "<br>" +
        "<b>Word Count:</b> " + wordCount + "<br><br>" +
        "<b>Reversed Text:</b><br>" + reversedText;

    // Console output (important for exam)
    console.log("Characters:", charCount);
    console.log("Words:", wordCount);
    console.log("Reversed:", reversedText);
}