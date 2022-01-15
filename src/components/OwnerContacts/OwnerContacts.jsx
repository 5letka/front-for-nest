import React from 'react'  
import s from './OwnerContacts.module.css'

import { useSelector } from 'react-redux'


const OwnerContacts = (props) => {

    const ownerData = useSelector((state) => { return state.owner.profile})
    //console.log('ownerdata',ownerData)

    return (
        <div className={s.wrapper}>
            <div className={s.title}>Контакты:</div>
                <label >Фамилия:    <input type="text" value={ownerData['last_name']} /></label>
                <label >Имя:    <input type="text" value={ownerData['first_Name']} /></label>
                <label >Отчество:    <input type="text" value={ownerData['middle_name']} /></label>
                <label >Тел: <input type="text" value={ownerData['phone']} /></label>
                <label >Viber: <input type="text" value={ownerData['viber']}  /></label>
                <label >Telegram: <input type="text" value={ownerData['telegram']}  /></label>
                <label >Страна: <input type="text" value={ownerData['country']}  /></label>
                <label >Город: <input type="text" value={ownerData['city']} /></label>
                <label >Улица: <input type="text" value={ownerData['street']} /></label>
                <label >Дом: <input type="text" value={ownerData['house']}  /></label>
            
        </div>
    )
}

export default OwnerContacts