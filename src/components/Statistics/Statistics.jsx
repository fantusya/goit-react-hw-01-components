import PropTypes from 'prop-types';

export default function Statistics({ fileExtension, percentage }) {
    return (
      <>
        <span className="label">{fileExtension}</span>
        <span className="percentage">{percentage}%</span>
      </>
    )
}

Statistics.propTypes = {
    fileExtension: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}