import {Link} from 'react-router-dom';

export default function Home() {
    return(
        <div>
        <p> This is Home</p>
        <Link to="/member">Member</Link>
        </div>
    );
}
