export const SPIN_SHOW = 'SPIN_SHOW'
export const SPIN_HIDDEN = 'SPIN_HIDDEN'

export function spin(){
	return {
		type: SPIN_SHOW
	}
}

export function spinHidden(){
	return {
		type:SPIN_HIDDEN
	}
}
