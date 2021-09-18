

export default function ExpenseManagementPage() {





    return (
        <div>
            <div>
                <h3>Expense Management Page</h3>
            </div>
            
            <button onClick={() => window.open("/expenses/create", "_self")}>
                Create a new expense
            </button>

            <button onClick={() => window.open("/expenses/viewall", "_self")}>
                View all expenses
            </button>

            <button onClick={() => window.open("/expenses/view", "_self")}>
                View an expense
            </button>

            <button onClick={() => window.open("/expenses/update", "_self")}>
                Update an expense
            </button>

            <button onClick={() => window.open("/expenses/delete", "_self")}>
                Delete an expense
            </button>
        </div>
    )
}