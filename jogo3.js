document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('dragstart', dragStart);
});

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
}

document.querySelectorAll('.dropzone').forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', dropWord);
});

function dragOver(event) {
    event.preventDefault();
}

function dropWord(event) {
    event.preventDefault();
    const wordId = event.dataTransfer.getData('text');
    const wordElement = document.getElementById(wordId);

    if (event.target.children.length === 0) {
        event.target.appendChild(wordElement);
    }
}

document.getElementById('checkButton').addEventListener('click', checkAnswer);

function checkAnswer() {
    const dropZone1 = document.getElementById('dropZone1');
    const selectedWord = dropZone1.textContent.trim();
    const result = document.getElementById('result');
    const nextButton = document.getElementById('nextButton');

    if (selectedWord === 'sal e água') {
        result.textContent = 'Correto! Vá para a próxima frase.';
        result.classList.remove('red');
        result.classList.add('green');
        nextButton.classList.remove('hidden');
    } else {
        result.textContent = 'Errado. Tente novamente!';
        result.classList.remove('green');
        result.classList.add('red');
    }
}

document.getElementById('nextButton').addEventListener('click', function() {
    location.reload();
});

document.getElementById('backButton').addEventListener('click', function() {
    const dropZone1 = document.getElementById('dropZone1');
    dropZone1.textContent = ''; 
    const draggableItems = document.querySelectorAll('.draggable');
    draggableItems.forEach(item => {
        item.style.display = 'block';
    });
});

document.getElementById('checkButton').addEventListener('click', checkAnswer);

function checkAnswer() {
    const dropZone1 = document.getElementById('dropZone1');
    const selectedWord = dropZone1.textContent.trim();
    const result = document.getElementById('result');
    const nextButton = document.getElementById('nextButton');
    const backButton = document.getElementById('backButton');

    if (selectedWord === 'sal e água') {
        result.textContent = 'Correto! Vá para a próxima frase.';
        result.classList.remove('red');
        result.classList.add('green');
        nextButton.classList.remove('hidden');
        backButton.classList.add('hidden');
    } else {
        result.textContent = 'Errado. Tente novamente!';
        result.classList.remove('green');
        result.classList.add('red');
        nextButton.classList.add('hidden');
        backButton.classList.remove('hidden');
    }
}

document.getElementById('backButton').addEventListener('click', function() {
    location.reload();
});

document.getElementById('nextButton').addEventListener('click', function() {
    location.reload();
});