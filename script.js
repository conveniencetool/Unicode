function analyzeUnicode() {
    const inputText = document.getElementById('inputText').value;
    const resultsBody = document.getElementById('resultsBody');
    resultsBody.innerHTML = ''; // 解析結果をクリア

    for (const char of inputText) {
        const codePoint = char.codePointAt(0).toString(16).toUpperCase();
        const category = getUnicodeCategory(char);
        const row = document.createElement('tr');

        // 各データを挿入
        row.innerHTML = `
            <td>${char}</td>
            <td>U+${codePoint}</td>
            <td>${category}</td>
        `;
        resultsBody.appendChild(row);
    }
}

function getUnicodeCategory(char) {
    const code = char.codePointAt(0);
    if (/\p{Letter}/u.test(char)) return 'Letter (文字)';
    if (/\p{Number}/u.test(char)) return 'Number (数字)';
    if (/\p{Symbol}/u.test(char)) return 'Symbol (記号)';
    if (/\p{Punctuation}/u.test(char)) return 'Punctuation (句読点)';
    if (/\p{Separator}/u.test(char)) return 'Separator (区切り)';
    return 'Other';
}

