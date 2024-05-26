import { useReducer } from "react"
import "./Calculator.css"
import { initialState, reducer } from "../reducer/reducerCalculator";

const CalculatorUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleNumber1Change = (e) => {
        dispatch({ type: "SET_NUMBER1", payload: Number(e.target.value) });
    }
    const handleNumber2Change = (e) => {
        dispatch({ type: "SET_NUMBER2", payload: Number(e.target.value) });
    }
    const handleAddition = () => {
        dispatch({ type: "SET_RESULT", payload: state.number1 + state.number2 });
    }
    return (
        <>
            <div className="container">
                <h1>Use Reducer</h1>
                <div className="form">
                    <div className="form-group">
                        <label className="form-label" htmlFor="number1">Number1</label>
                        <input className="form-input" type="number" id="number1"
                            onChange={handleNumber1Change}
                            value={state.number1} />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="number2">Number2</label>
                        <input className="form-input" type="number" id="number2"
                            onChange={handleNumber2Change}
                            value={state.number2} />
                    </div>
                    <div className="form-button">
                        <button className="form-button"
                            onClick={handleAddition} >Add</button>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="result">Result</label>
                        <input className="form-input" type="number" id="result"
                            readOnly
                            value={state.result} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CalculatorUseReducer
