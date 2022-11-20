import styles from './Divider.module.css';
import PropTypes from 'prop-types';

const Divider = (props: any) => {
	return (
		<div className={styles.divider}>
			<span></span>
			<span>{props.text}</span>
			<span></span>
		</div>
	);
};

Divider.propTypes = {
	text: PropTypes.string,
};

export default Divider;
