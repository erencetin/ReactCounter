var React = require('react');
var {Link,IndexLink} = require('react-router');
l
var Nav = () =>
    {
            return(
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="menu-text">Counter</li>
                            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Timer</IndexLink></li>
                            <li>
                                <Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Count Down</Link>

                            </li>
                            <li>
                                <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About</Link>

                            </li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <p className="menu-text">Eren Çetin</p>
                    </div>
                </div>
            );
        
    };

module.exports = Nav;