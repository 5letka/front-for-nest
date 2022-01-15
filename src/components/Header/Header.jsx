import React from 'react'  
import OwnerContacts from '../OwnerContacts/OwnerContacts'
import s from './Header.module.css'

const Header = (props) => {

    console.log('header',props)
    return (
        <div className={s.header}>
            <div className={s.title} >Личный кабинет арендодателя</div>
            <OwnerContacts  />
        </div>
    )
}

export default Header