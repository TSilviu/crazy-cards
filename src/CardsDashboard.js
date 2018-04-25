import React from 'react';
import times from 'lodash/times';
import constant from 'lodash/constant';

class Card extends React.Component {
	handleClick() {
		const { onClick, id } = this.props;
		onClick(id);
	}

	render() {
		const { name, details, isSelected } = this.props;
		const style = isSelected ? { backgroundColor: '#ADD8E6' } : {}
		return (     
			<div 
				className="card" 
				onClick={this.handleClick.bind(this)}
				style={style}
			>
				<p>{name}</p>
				<p>Apr - {details.apr}%</p>
				<p>Balance Transfer Duration - {details.btod} months</p>
				<p>Purchase Offer Duration - {details.pod} months</p>
				<p>Credit Available - {details.credit}</p>
			</div>
	  );
	}
}

class CardsDashboard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: times(this.props.cards.length, constant(false)),
			totalCredit: 0
		}

		this.generateCards = this.generateCards.bind(this);
		this.handleCardClick = this.handleCardClick.bind(this);
	}

	handleCardClick(cardId) {
		const { selected, totalCredit } = this.state;
		const { cards } = this.props;

		selected[cardId] = !selected[cardId];

		console.log(cards[cardId]);
		const newTotal = selected[cardId] ?
			totalCredit + cards[cardId].details.credit
			:
			totalCredit - cards[cardId].details.credit
		this.setState({selected: selected, totalCredit: newTotal});
	}

	generateCards() {
		return this.props.cards.map(({name, details}, index) =>
			<Card 
				key={name} 
				name={name}
				id={index} 
				details={details} 
				isSelected={this.state.selected[index]}
				onClick={this.handleCardClick}
			/>
		);
	}

	render() {
		return (
			<div className="cards-dashboard">
				{ this.generateCards() }
				<p>The total amount of credit: {this.state.totalCredit}</p>
			</div>
		);
	}
}

export default CardsDashboard;