
export default function StartScreen({ numQuestions, dispatch }) {
    return (
        <div>
            <h2>Welcome to the game</h2>
            <p>{numQuestions} question to test your react knowledge</p>
            <button className="btn btn-ui" onClick={() => dispatch({ type: 'start' })}> start</button>
        </div>
    )
}
