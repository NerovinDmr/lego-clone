import React from 'react'
import { FiChevronRight } from "react-icons/fi";
import{ButtonLernMore} from "./styles/button"


export default function Button({bg,text}) {
    return (
        <>
           <ButtonLernMore bg = {bg} text={text} >
                          Узнать больше 
                          <FiChevronRight/>
                        </ButtonLernMore> 
        </>
    )
}

