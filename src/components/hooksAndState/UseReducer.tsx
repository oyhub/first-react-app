import { useReducer } from 'react';

const initialState = { enemyHitPoints: 100, bonusDamage: false, dead: false };

function reducer(state: { enemyHitPoints: number, bonusDamage: boolean, dead?: any; }, action: { type: any; }) {
    switch (action.type) {
        case 'attack':
            if (state.enemyHitPoints <= 0) {
                return { ...state, dead: true };
            }
            const randomValue = Math.random() < 0.2 ?
                { enemyHitPoints: state.enemyHitPoints - 20, bonusDamage: true } :
                { enemyHitPoints: state.enemyHitPoints - 10, bonusDamage: false };
            return randomValue;
        case 'reset':
            return   { enemyHitPoints: 100, bonusDamage: false, dead: false };
        default:
            throw new Error();
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h2 style={{ marginBottom: '0'}}>UseReducer</h2>
            <button onClick={() => dispatch({ type: 'attack' })}>Attack</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <label>Enemy hit points: {state.enemyHitPoints}  {('dead' in state) && state.dead && <span> DEAD</span>} {state.bonusDamage && <span>BONUS DAMAGE</span>}</label>
        </div>
    )
}

export default UseReducer;