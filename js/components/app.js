import React, {component} from 'react';
import EnterGuess from '../containers/enterGuess';
import HotOrCold from '../containers/hotOrCold';
import GuessHistory from '../containers/guessHistory';
import store from '../store';

/*
store.subscribe(() => {
	console.log("subscribed store: ", store.getState());
})
*/




const App = () => {
	const abc = "some string 2";
	return 	<div>
				<HotOrCold />
				<EnterGuess />
				<GuessHistory />
			</div>;
}






export default App;

