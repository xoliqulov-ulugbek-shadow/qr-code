const darkAnDlight = document.getElementById('dark-oq');
let m = 0;

function generateQRCode() {
    let text = document.getElementById("text").value;
    let telefon = document.getElementById("text2").value;
    let email = document.getElementById("text3").value;
    let vebSayt = document.getElementById("text4").value;
    let kompaniya = document.getElementById("text5").value;
    let manzil = document.getElementById("text6").value;
    let qrColor = document.getElementById("qrColor").value;
    let bgColor = document.getElementById("bgColor").value;

    if (!text || !telefon || !email || !vebSayt || !kompaniya || !manzil) {
        alert("To'ldirsangiz ishlaydi bo'lmasa ishlamaydi.!");
        return;
    }

    let combinedData = `Ism: ${text}\nTel: ${telefon}\nEmail: ${email}\nWeb: ${vebSayt}\nKompaniya: ${kompaniya}\nManzil: ${manzil}`;

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
        text: combinedData,
        width: 200,
        height: 200,
        colorDark: qrColor,
        colorLight: bgColor,
        correctLevel: QRCode.CorrectLevel.H

    });
}

document.getElementById("qrColor").addEventListener("input", generateQRCode);
document.getElementById("bgColor").addEventListener("input", generateQRCode);

darkAnDlight.addEventListener("click", function () {
    m++
    if (m % 2 == 0) {
        darkAnDlight.textContent = 'Dark';
        document.head.innerHTML = `<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #5A2DD1, #e081d1);
    font-family: Arial, Helvetica, sans-serif;
    padding: 15px;
}

.conteiner {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 100%;
    max-width: 788px;
    min-height: auto;
}

h2 {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0 15px;
}

input[type='text'] {
    width: 100%;
    max-width: 220px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #e0e0e0;
    outline: none;
    margin-left: 8px;
}

.button {
    background: blue;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    margin: 20px 0 25px;
    transition: 0.5s;
    width: 100%;
    max-width: 220px;
}

.button:hover {
    background: #5b5be0;
}

#qrcode {
    margin: 0 auto;
    display: flex;
    justify-content: center;
}

.color-picker {
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    margin-top: 15px;
    flex-wrap: wrap;
}

.color-picker label {
    font-size: 14px;
    margin-right: 8px;
}

.div-html div {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    justify-content: flex-start;
}

.qr {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin: 15px 0;
}

.qrrrr {
    margin: 0;
}

#dark-oq {
    width: 100px;
    height: 32px;
    background: linear-gradient(35deg, #ddd, #323134);
    border: 1px solid #ddd;
    border-radius: 20px;
    font-weight: bold;
    margin: 0 0 10px auto;
    display: block;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

@media (max-width: 768px) {
    .conteiner {
        padding: 15px;
    }

    .qr {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .div-html {
        width: 100%;
        max-width: 320px;
    }

    .div-html div {
        justify-content: center;
    }

    input[type='text'] {
        max-width: 200px;
    }

    #qrcode {
        margin: 0;
    }

    .color-picker {
        gap: 15px;
    }

    #dark-oq {
        margin: 0 auto 10px;
    }
}

@media (max-width: 480px) {
    body {
        padding: 10px;
    }

    .conteiner {
        padding: 12px;
    }

    h2 {
        font-size: 18px;
    }

    input[type='text'] {
        max-width: 180px;
        font-size: 14px;
        padding: 8px;
    }

    .button {
        max-width: 180px;
        padding: 10px 15px;
    }

    .color-picker {
        flex-direction: column;
        gap: 12px;
    }

    .div-html div i {
        font-size: 18px;
    }
}
    </style> `
    }


    else {
        darkAnDlight.textContent = 'Light';
        document.head.innerHTML = `<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1a1a, #4a4a4a);
    font-family: Arial, Helvetica, sans-serif;
    padding: 15px;
}
.conteiner {
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    text-align: center;
    width: 100%;
    max-width: 788px;
    min-height: auto;
}
h2 {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0 15px;
    color: #111;
}
input[type='text'] {
    width: 100%;
    max-width: 220px;
    padding: 10px;
    border: 1px solid #999;
    border-radius: 5px;
    background: #e8e8e8;
    outline: none;
    margin-left: 8px;
    color: #111;
}
.button {
    background: #111;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    margin: 20px 0 25px;
    transition: 0.5s;
    width: 100%;
    max-width: 220px;
}
.button:hover {
    background: #333;
}
#qrcode {
    margin: 0 auto;
    display: flex;
    justify-content: center;
}
.color-picker {
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    margin-top: 15px;
    flex-wrap: wrap;
}
.color-picker label {
    font-size: 14px;
    margin-right: 8px;
    color: #222;
}
.div-html div {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    justify-content: flex-start;
}
.qr {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin: 15px 0;
}
.qrrrr {
    margin: 0;
}
#dark-oq {
    width: 100px;
    height: 32px;
    background: linear-gradient(35deg, #ddd, #222);
    border: 1px solid #bbb;
    border-radius: 20px;
    font-weight: bold;
    margin: 0 0 10px auto;
    display: block;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    color: #111;
}

@media (max-width: 768px) {
    .conteiner {
        padding: 15px;
    }
    .qr {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    .div-html {
        width: 100%;
        max-width: 320px;
    }
    .div-html div {
        justify-content: center;
    }
    input[type='text'] {
        max-width: 200px;
    }
    #qrcode {
        margin: 0;
    }
    .color-picker {
        gap: 15px;
    }
    #dark-oq {
        margin: 0 auto 10px;
    }
}
@media (max-width: 480px) {
    body {
        padding: 10px;
    }
    .conteiner {
        padding: 12px;
    }
    h2 {
        font-size: 18px;
    }
    input[type='text'] {
        max-width: 180px;
        font-size: 14px;
        padding: 8px;
    }
    .button {
        max-width: 180px;
        padding: 10px 15px;
    }
    .color-picker {
        flex-direction: column;
        gap: 12px;
    }
    .div-html div i {
        font-size: 18px;
    }
}
    </style> `
    }
});