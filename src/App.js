/*
   task: build a collection of recipes
*/

// to use other components / libraries, we need to import them
import Recipe from './components/Recipe';

// to use a .css file, we can also import it
import './App.css';


// React components are JS functions that return HTML / other components
// React component names should be capitalized
function App() {
	const recipes = [
		{
			title : 'Ramen',
			prep_time : '20min',
			ingredients : [
				'some ramen noodles',
				'1 cup of water',
				'seasoning',
				'2 eggs'
			]
		},

		{
			title : 'Curry Mutton',
			prep_time: '40min',
			ingredients: [
				'scallions',
				'curry powder',
				'salt',
				'hot pepper'
			]
		}
		
	];
	

	

    
    
    // note: for React, the class attribute must be named className instead
    return (
	<div className='recipe-parent'>
		{ recipes.map((recipe) => { return <Recipe ingredients={recipe.ingredients} title={recipe.title} prep_title={recipe.prep_time}/>}) }
	</div>
    );
}

// this allows other components / files to use this component
export default App;
