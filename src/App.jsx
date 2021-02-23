import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addItem, deleteItem} from './redux/actions';

const App = ({addItem, deleteItem, wishList}) => {

	const [input, setInput] = useState('');

	const onAdd = () => {
		if(input.length === 0) {
			window.alert('No item entered!');
		} else if(wishList.includes(input)) {
			window.alert('Item already in wish list!');
		} else {
			addItem(input);
			setInput('');
		}
	}

	const onDelete = (item) => {
		deleteItem(item);
	}

	const onSubmit = () => {
		if(wishList.length === 0) {
			window.alert('No wish list to submit!');
		} else {
			window.alert('Wish list submitted to Santa!');
			wishList.forEach(item => {
				onDelete(item);
			});
		}
	}

	return (
	  <div style={styles.container}>
	  	<div style={styles.box}>
	  		<h4 style={styles.title}>MY WISHLIST</h4>
	  		<div style={styles.list}>
	  			{wishList.map((item, i) => (
	  				<span onClick={() => onDelete(item)} key={i} style={styles.listItem}>{item}</span>
	  			))}
	  		</div>
	  		<input onChange={(e) => setInput(e.target.value)} value={input} type="text" style={styles.input}/>
	  		<button onClick={onAdd} style={{...styles.button, width: '40%'}}>Add</button>
	  		<button onClick={onSubmit} style={{...styles.button, width: 'calc(70% + 2rem)'}}>Submit</button>
	  	</div>
	  </div>
	);
}

const styles = {
	container: {
		width: "100vw", 
		minHeight: "calc(100vh - 3rem)", 
		display: 'flex', 
		justifyContent: 'center', 
		backgroundColor: "lightgrey", 
		paddingTop: '3rem'
	},
	box: {
		width: 400, 
		height: 540, 
		backgroundColor: 'pink', 
		borderRadius: 10, 
		boxShadow: '0 0 10px black', 
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		marginBlockStart: 0
	},
	list: {
		height: '40%',
		width: '70%',
		backgroundColor: 'white',
		border: '1px solid black',
		overflowY: 'scroll',
		padding: '1rem',
		display: 'flex',
		flexDirection: 'column'
	},
	listItem: {
		margin: '0.25rem',
		fontSize: '0.9rem',
		cursor: 'pointer'
	},
	input: {
		padding: '0.5rem',
		marginTop: "1.5rem",
		width: 'calc(70% + 1rem)'
	},
	button: {
		marginTop: "1.5rem",
		backgroundColor: "lightgreen",
		fontWeight: 600,
		padding: '1em',
		borderRadius: 6,
		borderWidth: 0,
		boxShadow: '0 0 8px grey',
		cursor: 'pointer',
		outline: 'none'
	}
}

const mapStateToProps = state => ({
  wishList: state.wishList
});

export default connect(mapStateToProps,{addItem, deleteItem})(App);


