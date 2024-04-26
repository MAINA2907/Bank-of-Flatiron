import Row from "./row"
function Table(){

const transaction = [
    {
        date: "14/04/2024",
        description: "Withdraw",
        category: "Salary",
        amount: "3000"
    },
    {
        date: "14/04/2024",
        description: "Deposit",
        category: "Income",
        amount: "50000"
    },
    {
        date: "16/04/2024",
        description: "Business",
        category: "Expenditure",
        amount: "5000"
    }


        ]

    return(
        <>

        <table className="table table-light">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <Row transactions={transaction}/>
            </tbody>    
        </table>
        </>
    )

}


export default Table

