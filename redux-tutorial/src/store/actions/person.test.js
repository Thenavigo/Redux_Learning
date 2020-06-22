import update_person, {UPDATE_PERSON} from './personActions'

describe('actions',()=>{
	it('should return the action for person',()=>{
		const expectedAction = {
			type: UPDATE_PERSON,
			payload:'Isaac'
		}
		expect(update_person).toEqual(expectedAction)
	})
})