import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styles from "../Movie.module.css"

function Movie({ id, coverImg, title, summary, genres }) {
    return (
    <div className={styles.movie}>
        <img src={coverImg} alt={title} className={styles.imgLocation}></img>
        <h2>
            <Link className={styles.title} to={`/movie/${id}`}>{title}</Link>
        </h2>
        <div className={styles.contentSize}>
        <p className={styles.drop}>{summary}</p>
        </div>
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;  