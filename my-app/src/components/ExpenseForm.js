import './ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm(props) {
    const [userInput, setUserInput] = useState({
        eventTitle: '',
        eventAmount: '',
        eventDate: ''
    })
    // const [eventTitle, setEventTitle] = useState('');
    // const [eventAmount, setEventAmount] = useState('');
    // const [eventDate, setEventDate] = useState('');

    function titleChangeHandler(event) {
        setUserInput({
            ...userInput,
            eventTitle: event.target.value
        });
    }

    function amountChangeHandler(event) {
        setUserInput({
            ...userInput,
            eventAmount: event.target.value
        });
    }

    function dateChangeHandler(event) {
        setUserInput((prevState) =>{
            return {...prevState,
                eventDate: event.target.value
            }
        });
    }

    function submitHandler(event)
    {
        event.preventDefault();
        const expenseData = {
            title: userInput.eventTitle,
            amount: userInput.eventAmount,
            date: new Date(userInput.eventDate)
        };
        props.onSaveExpenseData(expenseData);
        setUserInput({
            eventTitle: '',
            eventAmount: '',
            eventDate: ''
        });
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={userInput.eventTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={userInput.eventAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={userInput.eventDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;