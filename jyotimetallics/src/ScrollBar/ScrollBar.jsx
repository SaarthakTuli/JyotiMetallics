import React, {useState, useEffect} from 'react'
import './ScrollBar.css'

function ScrollBar() {

    const chain = [0, 1];

    const [rotate, setRotate] = useState(0);

    const [top, setTop] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1) {
                setRotate(rotate - window.scrollY);
                setTop(top - window.scrollY);
            }

            else if (window.scrollY < 1) {
                setRotate(rotate + window.scrollY);
                setTop(top + window.scrollY);
            }
                
            else {
                setRotate(0);
                setTop(0);
            }

            });
    
            return () => {
                window.removeEventListener("scroll", () => { });
            };
    }, [])
    return (
        <div>
          
            <img
                alt='gear'
                src='./images/gear.png'
                className='scroll__image'

                style={{
                    transform: `rotate(${rotate}deg)`,
                }}
            />

            <div>
                <img
                    alt="chain"
                    src="./images/chain.png"
                    className='chain__image'
                    style={{
                        top: `${top + (400 * 0)}px`
                    }}
                />

                <img
                    alt="chain"
                    src="./images/chain.png"
                    className='chain__image'
                    style={{
                        top: `${top + (400 * 1)}px`
                    }}
                />
       
            
                
                <img
                    alt="chain"
                    src="./images/chain.png"
                    className='chain__image'
                    style={{
                        top: `${top + (400 * 2)}px`
                    }}
                />

                
                
                <img
                    alt="chain"
                    src="./images/chain.png"
                    className='chain__image'
                    style={{
                        top: `${top + (400 * 3)}px`
                    }}
                />

                <img
                    alt="chain"
                    src="./images/chain.png"
                    className='chain__image'
                    style={{
                        top: `${top + (400 * 4)}px`
                    }}
                />

                <img
                    alt="chain"
                    src="./images/chain.png"
                    className='chain__image'
                    style={{
                        top: `${top + (400 * 5)}px`
                    }}
                />

                <img
                    alt="chain"
                    src="./images/chain.png"
                    className='chain__image'
                    style={{
                        top: `${top + (400 * 6)}px`
                    }}
                />

                <img
                    alt="chain"
                    src="./images/chain.png"
                    className='chain__image'
                    style={{
                        top: `${top + (400 * 7)}px`
                    }}
                />

                <img
                    alt="chain"
                    src="./images/chain.png"
                    className='chain__image'
                    style={{
                        top: `${top + (400 * 8)}px`
                    }}
                />

                <img
                    alt="chain"
                    src="./images/chain.png"
                    className='chain__image'
                    style={{
                        top: `${top + (400 * 9)}px`
                    }}
                />

                <img
                    alt="chain"
                    src="./images/chain.png"
                    className='chain__image'
                    style={{
                        top: `${top + (400 * 10)}px`
                    }}
                />

                <img
                    alt="chain"
                    src="./images/chain.png"
                    className='chain__image'
                    style={{
                        top: `${top + (400 * 11)}px`
                    }}
                />
                
            </div>
        </div>
    )
}

export default ScrollBar