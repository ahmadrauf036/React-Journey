import { useEffect, useState } from "react";

function useCurrency(currency) {
    const [data, setCurrencyData] = useState({});
    useEffect(() => {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(url)
        .then(res => res.json())
        .then(res => setCurrencyData(res[currency]))
    }, [currency])
    return data
}
export default useCurrency;
