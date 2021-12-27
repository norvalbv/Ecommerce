import React, {useState} from 'react';
import './newsletter.scss';

export default function Newsletter() {

    const [active, setActive] = useState(true);

    const update = () => {
        document.getElementById('newsletter').innerHTML = 'Thanks for Subscribing!';
        setActive(!active);
    }
    
    return (
        <div className="newsletter">
            <div className="text">
                <p id="newsletter">Unlock exclusive deals, our latest drops, and more! Sign up for texts.</p>
                <input placeholder='Email Address' type="text" className={active === false ? 'active' : null} />
                <button onClick={update} id="newsletter-btn"
                    className={active === false ? 'active' : null}
                >Sign Up</button>
            </div>
        </div>
    )
}
