function encryptText() {
    let input = document.getElementById('input-text').value.toLowerCase();
    let output = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('output-text').textContent = output;
    document.getElementById('output-image').style.display = 'none';
    document.getElementById('copy-message').style.display = 'none';
}

function decryptText() {
    let input = document.getElementById('input-text').value.toLowerCase();
    let output = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('output-text').textContent = output;
    document.getElementById('output-image').style.display = 'none';
    document.getElementById('copy-message').style.display = 'none';
}

function copyToClipboard() {
    const outputText = document.getElementById('output-text').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        const copyMessage = document.getElementById('copy-message');
        copyMessage.style.display = 'block';
        setTimeout(() => {
            copyMessage.style.display = 'none';
        }, 2000);
    });
}