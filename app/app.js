const Header = () => {
	return (
		<header>
			<h1>Przelicznik walut</h1>
			<p>W polu formularza wpisz kwotę w złotych,<br/>by uzyskać przeliczenie wartości<br/>w dolarach, euro i funtach szterlingach</p>
			<p>Dostępne są od razu wszystkie trzy wartości</p>
		</header>
	);
}

const Footer = () => {
	return (
		<footer>
			<h4>Uwaga</h4>
			<p>Kalkulator wartości ma charakter orientacyjny<br/>z arbitralnie przyjętym przelicznikiem.</p>
			<p>Bieżące kursy walut można sprawdzić na stronie<br/>Narodowego Banku Polskiego.</p>
			<a href="http://www.nbp.pl/home.aspx?f=/statystyka/kursy.html" rel="nofollow" target="_blank">Kursy walut NBP</a>
		</footer>
	);
}

const Cash = (props) => {
	const value = (props.cash / props.ratio).toFixed(2);
	return (
		<div>{props.title} {props.cash <= 0 ? "" : value}</div>
	);
}

class ExchangeCounter extends React.Component {
/* stan przechowywać będzie wartość z inputu */

	state = {
		amount: ""
	}
/* własciwość będąca zasobem w komponencie */
	currencies = [
		{ 
			id: 1,
			name: "dollar",
			ratio: 3.86,
			title: "Wartość w dolarach: "
		},
		{ 
			id: 2,
			name: "euro",
			ratio: 4.24,
			title: "Wartość w euro: "
		},
		{ 
			id: 3,
			name: "pound",
			ratio: 5,
			title: "Wartość w funtach: "
		}
	]
/* ustawiamy wartość wpisywaną do input: */
	handleChange = (e) => {
		this.setState({
			amount: e.target.value,
		})
	}

	render() {

		const calculators = this.currencies.map( currency => (
			<Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={this.state.amount} />
		))

		return (
			<div className="app">
				<Header />
				<label>
					<input 
						type="number" 
						value={this.state.amount} 
						onChange={this.handleChange}
						autoFocus
					/> złotych
				</label>
{/* tworzona automatycznie lista komponentów: */}
				{calculators}
				<Footer />
			</div>
		);
	}
}


ReactDOM.render(
	<ExchangeCounter />,
	document.getElementById("root")
);