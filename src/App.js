import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cashReducer.cash);
  const customers = useSelector((state) => state.customerReducer.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }


  return (
    <div className="App">
      <div className="counter">{cash}</div>
      <div className="container">
        <button className="button" onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <button className="button" onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>
        <button className="button" onClick={() => addCustomer(prompt())}>
          Добавить клиента
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
            key= {Date.now()}
              onClick={() => removeCustomer(customer)}
              style={{
                fontSize: "2rem",
                border: "1px solid black",
                padding: "10px",
                marginTop: 5,
                textAlign: "center",
              }}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{ fontSize: "2rem", marginTop: "20px", textAlign: "center" }}
        >
          Клиенты отсутствуют
        </div>
      )}
    </div>
  );
}

export default App;
