import React from 'react';
import styles from './Filter.module.scss'
import { FaSearch, FaSearchPlus } from 'react-icons/fa'
import { ITags } from './../../../types/tags.interfase';
import { BiSearch } from 'react-icons/bi';



const Filter = () => {
	const tags:ITags[]=[

		// {id:"1", name: "Tehn", description:''},
		// {id:"2", name: "Shop", description:''}
	]
	
	return (
		<div className={styles.cardlist}>
			<div className={styles.search}>
				<div className={styles.createline}></div>
				<h2>Filter</h2>
				<label>
					<input type="text" placeholder='Search document...' />
					<BiSearch />
				</label>
				<h2>Tags</h2>
				{tags.map(tags=>
				// <>
				<div className={styles.tagscont}>
					<input type="checkbox" id={tags.id} name={tags.name} value={tags.name} />
					<label htmlFor={tags.name}>{tags.name}</label> 
				</div>
				)}
			</div>
		</div>
	);
};

export default Filter;