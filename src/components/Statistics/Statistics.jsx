import PropTypes from 'prop-types';
import { LabelSpan, PercentageSpan } from './styles/Statistics.styled';

export default function Statistics({ fileExtension, percentage }) {
    return (
      <>
        <LabelSpan>{fileExtension}</LabelSpan>
        <PercentageSpan>{percentage}%</PercentageSpan>
      </>
    )
}

Statistics.propTypes = {
    fileExtension: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}