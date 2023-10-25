// JavaScript for the code editor
const codeHTMLTextarea = document.getElementById("codeHTML");
const codeCSSTextarea = document.getElementById("codeCSS");
const codeJSTextarea = document.getElementById("codeJS");
const outputIframe = document.getElementById("output");
const runButton = document.getElementById("runButton");
const saveButton = document.getElementById("saveButton");

const editorTabs = document.querySelectorAll(".editor-tab");
editorTabs[0].classList.add("active");

editorTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        editorTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        hideAllCodeEditors();
        const language = tab.id.replace("-tab", "");
        showCodeEditor(language);
    });
});

function hideAllCodeEditors() {
    codeHTMLTextarea.style.display = "none";
    codeCSSTextarea.style.display = "none";
    codeJSTextarea.style.display = "none";
}

function showCodeEditor(language) {
    if (language === "html") {
        codeHTMLTextarea.style.display = "block";
    } else if (language === "css") {
        codeCSSTextarea.style.display = "block";
    } else if (language === "js") {
        codeJSTextarea.style.display = "block";
    }
}

runButton.addEventListener("click", updateOutput);

function updateOutput() {
    const codeHTML = codeHTMLTextarea.value;
    const codeCSS = codeCSSTextarea.value;
    const codeJS = codeJSTextarea.value;

    const iframeDocument = outputIframe.contentDocument;
    iframeDocument.open();
    iframeDocument.write(
        `
        <html>
        <head>
            <style>${codeCSS}</style>
        </head>
        <body>${codeHTML}<script>${codeJS}</script></body>
        </html>
        `
    );
    iframeDocument.close();
}

saveButton.addEventListener("click", saveCode);

function saveCode() {
    const codeHTML = codeHTMLTextarea.value;
    const codeCSS = codeCSSTextarea.value;
    const codeJS = codeJSTextarea.value;
    // Implement your code saving logic here
}

