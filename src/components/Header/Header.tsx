import styles from './Header.module.scss'
import logo from '../../assets/logo_icon.svg'
import { headerMenu } from '../../utils'
import { Link, NavLink } from 'react-router-dom'
export const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header_contant}>
                    <div className={styles.header_logo}>
                        <Link to={'/'}>
                            <img src={logo} alt='logo' className={`image  ${styles.header_logo_img}`} />
                        </Link>
                    </div>
                    <div className={styles.header_title}>
                        <p>
                            <span className={styles.header_title_date}>
                                Thursday,
                            </span>
                            <span className={styles.header_title_date}>
                                November 30,
                            </span>
                            <span className={styles.header_title_date}>
                                2023
                            </span>
                        </p>
                        <h1>
                            SEA HARVEST
                        </h1>
                        <h2>
                            FRESH SEAFOOD MARKET
                        </h2>
                    </div>
                    <div className={styles.header_contact}>
                        <Link to={'/contact'} className={styles.header_contact_link}>Belconnen Markets</Link>
                        <Link to={'/contact'} className={styles.header_contact_link}>Fyshwick Markets</Link>
                    </div>
                </div>
                <div className={styles.header_menu}>
                    {headerMenu.map((item) => (
                        <div className={styles.header_menu_block} key={item.name}>
                            <NavLink
                                to={item.href}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : styles.header_menu_block_link
                                }
                            >
                                {item.name}
                            </NavLink>;

                        </div>
                    ))}
                </div>
            </div>
        </header>
    )
}