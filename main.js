

  const apiUrl = 'https://script.google.com/macros/s/AKfycbylLCt0Io6SxlOBmOrfYhU9MA1o71QArlsEFYRyt0NHg2ZlAKTfBhQQBrd9nxziTQw/exec';

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      isim: "Hz. Ekizî",
      mesaj: "Sistemi test ediyorum ya mürşid"
    })
  })
  .then(res => res.text())
  .then(console.log)
  .catch(console.error);

