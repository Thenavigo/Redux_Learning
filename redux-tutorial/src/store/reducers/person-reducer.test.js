import personReducer from './personReducer'
import {UPDATE_PERSON} from '../actions/personActions'

describe('reducer',()=>{
	it('should update person name only',()=>{
		const initialState = {name:'Patrick', email:'reactredux@tutorial.pat'}
		expect(
			personReducer(initialState,{
				type: UPDATE_PERSON,
				payload:'Isaac'
			})
		)
		.toEqual({name:'Isaac', email:'reactredux@tutorial.pat'})
	})
})