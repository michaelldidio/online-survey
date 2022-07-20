import { Link } from 'react-router-dom'


function Home() {
    return <div>
        <div className="section">

            <div className="content">
                <h1>Welcome to WM Surveys!</h1>
                <p>Join us now to create a survey and share it with others to see their responses!</p>
                <Link to="/create" className="btn">get started</Link>
            </div>
        </div>
        <div className="section">


        </div>
    </div>
}

export default Home