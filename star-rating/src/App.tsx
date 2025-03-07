import StarRating from './Components/StarRating';
import styles from './starRating.module.css';
import './App.css'

function App() {
  return (
    <>
      <div className={styles.App}>
        <StarRating value={2} total={5} />
      </div>
    </>
  )
}

export default App
