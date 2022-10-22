import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticsTitle } from './styles/StatisticsSection.styled';

export default function StatisticsSection({ title, children }) {
    return (
      <StatisticsContainer>
        {title && <StatisticsTitle>{title}</StatisticsTitle>}
        {children}
      </StatisticsContainer>
    )
};

StatisticsSection.propTypes = {
  title: PropTypes.string,
}