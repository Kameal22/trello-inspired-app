import {useState} from "react";

const useInputState =  initialValue => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(false);

    const handleChange = e => {
        setValue(e.target.value);
    };

    const reset = () => {
        setValue("");
    }

    return [value, handleChange, reset, error, setError];
}

export default useInputState;