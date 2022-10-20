import PropTypes from 'prop-types';
import Statistics from './Statistics';

export default function StatisticsList({ stats }) {
    return (
      <ul className="stat-list list">
        {stats.map(stat =>
          <li key={stat.id}>
            <Statistics
              fileExtension={stat.label}
              percentage={stat.percentage}
            />
          </li>)
        }
      </ul>
    )
};

StatisticsList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}