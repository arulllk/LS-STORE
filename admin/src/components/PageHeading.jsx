import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'

function PageHeading ({heading, breadCrumb}) {  
    return (      
        <div className='flex justify-between items-center mb-[27px]'>
            <h1 className='page-heading'>{heading}</h1>   
            {breadCrumb && 
                <ul className='flex gap-10 text-xs text-black-water'>
                    <li><NavLink to="">Admin</NavLink></li>
                    { breadCrumb.map((item,index)=>{
                        return(
                            <React.Fragment key={index}>
                                <li><FontAwesomeIcon className='text-[10px]' icon={faChevronRight} /></li>
                                <li><NavLink to={item.path}>{item.label}</NavLink></li>
                            </React.Fragment>                
                        )                        
                    })}                   
                </ul>
            }            
        </div>         
    );
}

export default PageHeading;

