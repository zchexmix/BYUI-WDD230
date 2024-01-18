const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


let bomArray = getChapterList() || [];

button.addEventListener('click' , () => {
    if (input.value !== '') {
        displayList(input.value);
        bomArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

bomArray.forEach(chapter => {
    displayList(chapter);
});
function displayList(item) {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    li.textContent = item;
    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('delete');
    li.append(deleteBtn);
    list.append(li);
    deleteBtn.addEventListener('click' , function () {
        list.removeChild(li);
        deleteChap(li.textContent);
        input.focus;
    });
}


function setChapterList() {
    localStorage.setItem('chapList', JSON.stringify(bomArray));
}
function getChapterList() {
    return JSON.parse(localStorage.getItem('chapList'));
}

function deleteChap(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    bomArray = bomArray.filter(item => item !== chapter);
    setChapterList()
}