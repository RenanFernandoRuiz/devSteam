import styles from './container.module.css'

const Container = ({children}) => {
  return (
    <div className={styles.Container}>{children}</div>
  )
}

export default Container