import PropTypes from 'prop-types';

const Analytics = ({ userMetrics, contentMetrics }) => {
  return (
    <div className="bg-gray-800 p-6 shadow-lg rounded-lg mt-6 text-gray-100 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <h2 className="text-2xl font-semibold mb-4 text-blue-400">Analytics</h2>

      <section className="mb-6">
        <h3 className="text-xl font-medium text-blue-300 mb-2">User Metrics</h3>
        <div className="space-y-2">
          <p className="text-gray-200">Total Users (Daily): <span className="font-semibold">{userMetrics.daily.totalUser}</span></p>
          <p className="text-gray-200">Active Users (Daily): <span className="font-semibold">{userMetrics.daily.activeUser}</span></p>
          <p className="text-gray-200">Creators (Daily): <span className="font-semibold">{userMetrics.daily.creator}</span></p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-medium text-blue-300 mb-2">Content Metrics</h3>
        <div className="space-y-2">
          <p className="text-gray-200">Total Posts (Daily): <span className="font-semibold">{contentMetrics.daily.totalPosts}</span></p>
          <p className="text-gray-200">Total Views (Daily): <span className="font-semibold">{contentMetrics.daily.totalViews}</span></p>
          <p className="text-gray-200">Total Comments (Daily): <span className="font-semibold">{contentMetrics.daily.totalComments}</span></p>
        </div>
      </section>
    </div>
  );
};

Analytics.propTypes = {
  userMetrics: PropTypes.object.isRequired,
  contentMetrics: PropTypes.object.isRequired,
};

export default Analytics;
