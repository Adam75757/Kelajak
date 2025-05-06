fetch('/students')
.then(res => res.json())
.then(data => {
    const table = document.getElementById('students');
    table.innerHTML = `
      <tr>
        <th>Ism</th><th>Yosh</th><th>Email</th><th>Telefon</th><th>Amal</th>
      </tr>`;
    data.forEach(s => {
        table.innerHTML += `
        <tr>
          <td>${s.name}</td>
          <td>${s.age}</td>
          <td>${s.email}</td>
          <td>${s.phone}</td>
          <td>
            <button onclick="deleteUser(${s.id})">O‘chirish</button>
          </td>
        </tr>`;
    });
});

function deleteUser(id) {
    fetch('/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
    }).then(() => location.reload());
}
