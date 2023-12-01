import styles from './TabContent.module.scss'


interface Tab {
    date: string,
    range: string
}

interface Props {
    lists: Tab[]
}
export const TabContant = ({ lists }: Props) => {

    return (
        <div className={styles.content}>
            {lists.map((list) => (
                <div className={styles.tabs} key={list.date}>
                    <span className={styles.date}>{list.date}</span>
                    <div className={styles.dots}></div>
                    <span className={styles.date}>{list.range}</span>
                </div>
            ))}
        </div>
    )
}