import styles from "../StarRating.module.css";

interface StarProps {
    marked: boolean;
    starId: number;
}
const Star: React.FC<StarProps> = ({marked, starId}: StarProps) => {
    return (
        <span data-star-id={starId} className={styles.star} role="button">
            {marked ? "\u2605" : "\u2606"}    
        </span>
    )
}

export default Star