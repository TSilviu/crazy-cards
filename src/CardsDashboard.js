import React from 'react';

function generateCards(cards) {
    return cards.map(({name, details}) => 
      <Card key={name} name={name} details={details} />
    );
}

function Card({name, details}) {
	return (     
		<div className="card">
			<p>{name}</p>
			<p>Apr - {details.apr}%</p>
			<p>Balance Transfer Duration - {details.btod} months</p>
			<p>Purchase Offer Duration - {details.pod} months</p>
			<p>Credit Available - {details.credit}</p>
		</div>
  );
}

function CardsDashboard(props) {
	const { cards } = props;
	return (
		<div className="cards-dashboard">
			{ generateCards(cards) }
		</div>
	);
}

export default CardsDashboard;