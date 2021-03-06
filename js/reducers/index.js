import React from 'react'
import {combineReducers} from 'redux'
import store from '../store'
import NewGuessReducer from './reducer-newGuess'
import GoalNumberReducer from './reducer-goalNumberGenerator'
import FeedbackReducer from './reducer-feedback'
import GuessCountReducer from './reducer-guessCount'
import GuessHistoryReducer from './reducer-guessHistory'
import axios from 'axios'

const FewestGuessReducer = (state=30, action) => {
	
	switch (action.type) {
		
		case "GET_FEWESTGUESS": {
			return action.payload
		}
	}

	return state
}


const allReducers = combineReducers({
	goalNumber: GoalNumberReducer,
	newGuess: NewGuessReducer,
	feedback: FeedbackReducer,
	guessCount: GuessCountReducer,
	guessHistory: GuessHistoryReducer,
	fewestGuess: FewestGuessReducer
})

export default allReducers

