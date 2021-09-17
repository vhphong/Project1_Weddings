

export default function WeddingPlannerPage() {




    return (
        <div>
            <h3>Wedding Planner Page</h3>
            <button onClick={() => window.open("/weddings", "_self")}>Wedding Management Page</button>
            <button onClick={() => window.open("/expenses", "_self")}>Expense Management Page</button>
        </div>

    )
}