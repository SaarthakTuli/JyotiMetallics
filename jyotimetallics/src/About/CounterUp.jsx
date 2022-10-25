import React, {useState} from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

import './CounterUp.css'

function CounterUp({total, text}) {

    const [counterOn, setCounterOn] = useState(false)

    return (
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
            <div className='counter__div'>
                {
                    counterOn
                    &&
                    <CountUp
                        start={0}
                        end={total}
                        duration={2}
                        delay={0}
                        className="counter__number"
                        suffix={"+"} />
                }

                <h1 style={{fontSize: "22px"}}>{text}</h1>
            </div>
        </ScrollTrigger>
      
    );
}

export default CounterUp