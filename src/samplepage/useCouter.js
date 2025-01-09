import { useState } from "react"


const useCouter = (initialValue = 0) => {
    const [count, setCounte] = useState(initialValue);

    const increment = () => setCounte((prevCount) => prevCount + 1);
    const decrement = () => setCounte((prevCount) => prevCount - 1);
    const reset = () => setCounte(initialValue);

    return {count, increment, decrement, reset};
};

export default useCouter;