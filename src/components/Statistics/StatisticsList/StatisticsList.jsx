import PropTypes from 'prop-types';
import Statistics from '../StatisticItem/Statistics';
import { StatisticsListUl, StatisticsItem } from './StatisticsList.styled';

export default function StatisticsList({ stats }) {
    return (
      <StatisticsListUl>
        {stats.map(stat =>
          <StatisticsItem key={stat.id}>
            <Statistics
              fileExtension={stat.label}
              percentage={stat.percentage}
            />
          </StatisticsItem>)
        }
      </StatisticsListUl>
    )
};

StatisticsList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}