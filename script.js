const addBtn = document.getElementById('add-btn');
const expenseList = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total-amount');
let total = 0;

addBtn.addEventListener('click', () => {
    const category = document.getElementById('category').value;
    const name = document.getElementById('name').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (!name || !amount) return;

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${new Date().toLocaleDateString()}</td>
        <td><span class="badge">${category}</span></td>
        <td>${name}</td>
        <td>${amount.toFixed(2)} €</td>
        <td><button onclick="deleteRow(this, ${amount})"><i class="fas fa-trash"></i></button></td>
    `;
    
    expenseList.appendChild(row);
    total += amount;
    totalDisplay.innerText = `${total.toFixed(2)} €`;
});

function deleteRow(btn, amount) {
    btn.parentElement.parentElement.remove();
    total -= amount;
    totalDisplay.innerText = `${total.toFixed(2)} €`;
}