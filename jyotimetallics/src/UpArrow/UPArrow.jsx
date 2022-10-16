import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

import './UPArrow.css';

function UPArrow() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            handleShow(true);
        }
        else handleShow(false);
        });

        return () => {
            window.removeEventListener("scroll", () => { });
        };
    }, []);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])

  return (
      <button className={`arrow_float ${show && `arrow_show`}`} onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
          }}>
              <AiOutlineArrowUp className='arrow-icon' />
          </button>
  )
}

export default UPArrow