/* eslint-disable no-unused-vars */
import { useState } from "react";

function useContador() {
    const [count, setCount] = useState(0)
    const incrementar = () => {
        setCount(count + 1)
    }
    const decrementar = () => {
        setCount(count - 1)
    }
    return { count, incrementar, decrementar}
}

export default useContador