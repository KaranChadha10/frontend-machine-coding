import React, {useState, useMemo} from 'react';

import Star from './Star';

interface StarRatingProps {
    value: number;
    total: number;
}

const StarRating: React.FC<StarRatingProps> = ({value, total}) => {
    const [rating, setRating] = useState(value || 0);
    const [selection, setSelection] = useState(0);
    const starArray = useMemo(() => Array.from( {length: total}),[total]);


    const onHover = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLElement;
        const starId = target.dataset?.starId;
        setSelection(starId ? Number(starId) : 0);
    }

    const onLeave = () => {
        setSelection(0);
    }

    const onClick = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLElement;
        const starId = target.dataset?.starId;
        setRating(starId ? Number(starId) : rating);
    }

    return (
        <div onMouseLeave={onLeave} onMouseOver={onHover} onClick={onClick}>
            {starArray.map((_, index) => (
                <Star
                    marked={(selection || rating) > index}
                    starId={index + 1}
                    key={`star_${index + 1}`}
                />
            ))}
        </div>
    )
}

export default StarRating;