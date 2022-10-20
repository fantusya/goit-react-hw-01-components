import PropTypes from 'prop-types';

export default function StatisticsSection({ title, children }) {
    return (
      <div>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    )
};

StatisticsSection.propTypes = {
    title: PropTypes.string,
}