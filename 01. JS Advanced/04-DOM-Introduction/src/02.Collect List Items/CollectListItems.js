function extractText() {
    let ul = document.getElementById('items');
    let textarea = document.getElementById('result');
    
    textarea.textContent = ul.textContent.trim();
}