var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtil = require('react-addons-test-utils');
var Countdown = require('Countdown');

describe('Countdown',()=>{
    it('Is countdown exist', function(){
        expect(Countdown).toExist();
    });
    describe('handleSetCountdown',function(done){
        it('should set state to started and countdown',()=>{
            var countdown = TestUtil.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);
            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');
            setTimeout(()=>{
                expect(countdown.state.count).toBe(9);
                done();
            },1001);
        });
    });
})