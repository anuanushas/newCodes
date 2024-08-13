document.addEventListener('DOMContentLoaded', function () {
    var counter = 1;

    function loadExpenses() {
        var expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        expenses.forEach(function (expense) {
            addExpenseToTable(expense);
        });
        counter = expenses.length + 1;
    }

    function saveExpenses() {
        var expenses = [];
        document.querySelectorAll('#tracker tr').forEach(function (row) {
            expenses.push({
                id: row.id,
                amount: row.cells[1].textContent,
                description: row.cells[2].textContent,
                category: row.cells[3].textContent
            });
        });
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    function addExpenseToTable(expense) {
        var newRow = document.createElement('tr');
        newRow.id = expense.id;
        newRow.innerHTML = `
            <td>${expense.id.slice(3)}</td>
            <td>${expense.amount}</td>
            <td>${expense.description}</td>
            <td>${expense.category}</td>
            <td>
                <span class="material-icons btn-edit" style="color:Green;cursor:pointer">edit</span>
            </td>
            <td>
                <span class="material-icons btn-delete" style="color:Red;cursor:pointer">delete</span>
            </td>
        `;
        document.getElementById('tracker').appendChild(newRow);
    }

    document.getElementById('inputForm').addEventListener('submit', function (event) {
        event.preventDefault();
        var amount = document.getElementById('Amount').value;
        var description = document.getElementById('description').value;
        var category = document.getElementById('category').value;
        var edit = document.getElementById('edit').value;

        if (edit) {
            var row = document.getElementById('row' + edit);
            row.cells[1].textContent = amount;
            row.cells[2].textContent = description;
            row.cells[3].textContent = category;
            document.getElementById('edit').value = '';
            showMessage('Expense updated successfully!');
        } else {
            var expense = {
                id: 'row' + counter,
                amount: amount,
                description: description,
                category: category
            };
            addExpenseToTable(expense);
            counter++;
            showMessage('Expense added successfully!');
        }

        saveExpenses();
        document.getElementById('Amount').value = '';
        document.getElementById('description').value = '';
        document.getElementById('category').value = 'Food';
        document.getElementById("submitButton").textContent = "Added Expense";
    });

    document.getElementById('tracker').addEventListener('click', function (event) {
        if (event.target.classList.contains('btn-delete')) {
            var row = event.target.closest('tr');
            row.remove();
            saveExpenses();
            showMessage('Expense deleted successfully!');
        } else if (event.target.classList.contains('btn-edit')) {
            var row = event.target.closest('tr');
            var cells = row.cells;
            document.getElementById('Amount').value = cells[1].textContent;
            document.getElementById('description').value = cells[2].textContent;
            document.getElementById('category').value = cells[3].textContent;
            var rowId = row.id.slice(3);
            document.getElementById('edit').value = rowId;
            document.getElementById("submitButton").textContent = "Updat Expense";
        }
    });

    function showMessage(message) {
        var alert = document.getElementById('submissionAlert');
        alert.textContent = message;
        alert.classList.remove('d-none');
        setTimeout(function () {
            alert.classList.add('d-none');
        }, 1000);
    }

    loadExpenses();
});
