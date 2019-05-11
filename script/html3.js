var wordsInTable = document.getElementsByTagName('td');

document.getElementById('checkBtn').addEventListener('click', function () {
    var word = document.getElementById('wordInput').value;
    if (word) {
        for (var i = 0; i < wordsInTable.length; i++) {
            wordsInTable[i].style.display = "table-cell";
        }
        checking(word);
    } else
        displayAll();
});

document.getElementById('wordInput').addEventListener('keydown', function (e) {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {

        var word = document.getElementById('wordInput').value;
        if (word) {
            for (var i = 0; i < wordsInTable.length; i++) {
                wordsInTable[i].style.display = "table-cell";
            }
            checking(word);
        } else {
            displayAll();
        }
        e.preventDefault();
    }
});

function checking(wordToChecking) {

    var wTc = wordToChecking.toLowerCase();
    for (var i = 0; i < wordsInTable.length; i++) {
        
        var wIt = wordsInTable[i].firstChild.nodeValue.toLowerCase();

        if (wIt.includes(wTc) == false) {
            wordsInTable[i].style.display = "none"
        }
    }
}

function displayAll() {
    for (var i = 0; i < wordsInTable.length; i++) {
        wordsInTable[i].style.display = "table-cell";
    }
}