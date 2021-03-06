import { useState, useEffect } from "react";
import { getCurrencies, getRates } from "../services/currencyService";

const useCurrency = () => {
	const baseSymbols = ["CAD", "GBP", "USD", "EUR"];
	const [symbols, setSymbols] = useState([]);
	const [orderedSymbols, setOrderedSymbols] = useState(baseSymbols);

	useEffect(() => {
		getCurrencies().then((res) => {
			setSymbols(res);
			const resKeys = [
				...baseSymbols,
				...Object.keys(res).filter((rate) => !baseSymbols.includes(rate)),
			];
			setOrderedSymbols(resKeys);
		});
	}, []);
	return { symbols, orderedSymbols, getRates };
};

export default useCurrency;
