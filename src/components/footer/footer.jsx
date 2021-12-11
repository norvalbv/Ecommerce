import React from 'react';
import './footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <div className="desc">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet veritatis officia illum quos aliquam voluptatem iusto est tempora eveniet! Pariatur corrupti quo suscipit cumque accusantium!</p>
                </div>
                <div className="links">
                    <div className="help">
                        <h3>Help</h3>
                        <ul>
                            <li>Delivery Information</li>
                            <li>FAQ</li>
                            <li>Returns Policy</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    <div className="pages">
                        <h3>Pages</h3>
                        <ul>
                            <li>Shop collections</li>
                            <li>My Account</li>
                            <li>Wishlist</li>
                        </ul>
                    </div>
                </div>
                <div className="follow">
                    <h3>Follow Us</h3>
                    <a href="https://www.instagram.com">Instagram</a>
                    <a href="https://www.facebook.com">Facebook</a>
                    <a href="https://www.twitter.com">Twitter</a>
                </div>
            </div>
            <div className="bottom">
                <p className="copyright">© 2021 | App designed by Benjamin Norval | All Rights Reserved</p>
            </div>
        </div>
    )
}
