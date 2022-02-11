var captilize = false

var accents = [
    `ù`,
    `û`,
    `ü`,
    `ÿ`,
    `€`,
    `’`,
    `“`,
    `”`,
    `«`,
    `»`,
    `–`,
    `—`,
    `à`,
    `â`,
    `æ`,
    `ç`,
    `é`,
    `è`,
    `ê`,
    `ë`,
    `ï`,
    `î`,
    `ô`,
    `œ`,
]
var accentscaptilize = [
    `Ù`,
    `Û`,
    `Ü`,
    `Ÿ`,
    `€`,
    `’`,
    `“`,
    `”`,
    `«`,
    `»`,
    `–`,
    `—`,
    `À`,
    `Â`,
    `Æ`,
    `Ç`,
    `É`,
    `È`,
    `Ê`,
    `Ë`,
    `Ï`,
    `Î`,
    `Ô`,
    `Œ`,
]
for (v of accents) {
    index = accents.indexOf(v)
    captilizething = accentscaptilize[accents.indexOf(v)]

    var btn = document.createElement("button")

    btn.setAttribute("captilize", captilizething.toString())
    btn.setAttribute("normal", v)
    btn.setAttribute("index", index.toString())

    btn.innerText = v.toString()


    btn.addEventListener("click", function (e) {
        copytext(e.target.getAttribute("index").toString())
    })

    document.body.append(btn)
}
captilizething = null

document.addEventListener("keydown", function (e) {
    if (e.key == "Shift") {
        for (v of document.body.getElementsByTagName("button")) {
            v.innerHTML = v.getAttribute("captilize")
            captilize = true
        }
    }
})

document.addEventListener("keyup", function (e) {
    if (e.key == "Shift") {
        for (v of document.body.getElementsByTagName("button")) {
            v.innerHTML = v.getAttribute("normal")
            captilize = false
        }
    }
})


function copytext(index) {
    var bg = chrome.extension.getBackgroundPage();
    var bgBox = bg.document.getElementById('textbox');

    if (captilize) {
        bgBox.value = accentscaptilize[index]
    } else {
        bgBox.value = accents[index]
    }

    bgBox.focus();
    bgBox.select();
    bg.document.execCommand('copy');
    window.close();
}