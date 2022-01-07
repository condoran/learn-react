import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    function saveExpenseData(enteredData) {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.onNewExpense(expenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
}

export default NewExpense;