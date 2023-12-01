import salmon from '../../assets/salmon-fillet-blue.png'
import pocket from '../../assets/pocket-watch-holly-600x514.png'
import styles from './Home.module.scss'
import { useState } from 'react'
import TabContant from '../../components/TabContent'
import { ButonsText, Paragtaphs, tabContentFirst, tabContentSecond } from '../../utils'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'
export const Home = () => {

    const [active, setActive] = useState(true)

    const changeActiveTrue = () => {
        setActive(true)
    }

    const changeActiveFalse = () => {
        setActive(false)
    }

    return (
        <>
            <div className={styles.home_container}>
                <div className={styles.home_contant_first_card}>
                    <h3 className={styles.home_contant_first_card_title}>
                        Sea Harverst Re-opens in Belconnen
                    </h3>
                    <Paragraph style={styles.home_contant_first_card_text} text={Paragtaphs.homeText} />
                    <img src={salmon} alt='Product' className={`image  ${styles.home_contant_card_image}`} />
                    <Paragraph style={styles.home_contant_first_card_discrition} text={Paragtaphs.homeDiscription} />
                    <Paragraph style={styles.home_contant_first_card_signature} text={Paragtaphs.homeSignature} />
                </div>
                <div className={styles.home_contant}>
                    <div className={styles.home_contant_second_card}>
                        <h3 className={styles.home_contant_second_card_title}>
                            HOLIDAY HRS
                        </h3>
                        <img src={pocket} alt='pocket' className={`image  ${styles.home_contant_card_image}`} />
                        <div className={styles.home_contant_second_card_buttons_conteiner}>
                            <Button text={ButonsText.belconnen} onClick={changeActiveTrue} style={active ? styles.active : styles.home_contant_second_card_button} />
                            <Button text={ButonsText.fyshwick} onClick={changeActiveFalse} style={active ? styles.home_contant_second_card_button : styles.active} />
                        </div>
                        <TabContant lists={active ? tabContentFirst : tabContentSecond} />
                    </div>
                </div>
            </div>
        </>
    )
}