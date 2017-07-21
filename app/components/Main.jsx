var React = require('react');
var Nav = require('Nav');
var Timer = require('Timer');
var Countdown = require('Countdown');
var Main = (props) =>{
  return (
      <div>
        <div>
            <Nav/>
            {props.children}
        </div>
        <div>
          {/*<Timer/>
          <Countdown/>*/}
        </div>
      </div>
    );
}
module.exports = Main;
