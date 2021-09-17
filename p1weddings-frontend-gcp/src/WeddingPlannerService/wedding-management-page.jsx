

export default function WeddingManagementPage() {





    return (
        <div>
            <div>
                <h3>Wedding Management Page</h3>
            </div>

            <button onClick={() => window.open("/weddings/create", "_self")}>
                Create a new weddings
            </button>

            <button onClick={() => window.open("/weddings/viewall", "_self")}>
                View all weddings
            </button>

            <button onClick={() => window.open("/weddings/view", "_self")}>
                View a wedding
            </button>

            <button onClick={() => window.open("/weddings/update", "_self")}>
                Update a wedding
            </button>

            <button onClick={() => window.open("/weddings/delete", "_self")}>
                Delete a wedding
            </button>
        </div>
    )
}