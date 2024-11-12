import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

const ContentModeration = ({ contentMetrics }) => {
  const [showDailyChartData, setShowDailyChartData] = useState(false);
  const [showMonthlyChartData, setShowMonthlyChartData] = useState(false);

  const toggleDailyChartData = () => setShowDailyChartData(!showDailyChartData);
  const toggleMonthlyChartData = () => setShowMonthlyChartData(!showMonthlyChartData);

  return (
    <div className="bg-gray-800 text-gray-200 p-4 shadow rounded mt-6">
      <h2 className="text-2xl font-semibold mb-4">Content Moderation</h2>

      <section className="mb-6">
        <h3 className="text-xl font-medium">Content Metrics (Daily)</h3>
        <p>Total Posts: {contentMetrics.daily.totalPosts}</p>
        <p>Total Categories: {contentMetrics.daily.totalCategory}</p>
        <p>Total Post Exits: {contentMetrics.daily.totalPostExitCount}</p>
        <p>Total Post Shares: {contentMetrics.daily.totalPostShares}</p>
        <p>Total Views: {contentMetrics.daily.totalViews}</p>
        <p>Total Comments: {contentMetrics.daily.totalComments}</p>
        <p>Total Post Blocked: {contentMetrics.daily.totalPostBlocked}</p>
        <p>Total Post Deleted: {contentMetrics.daily.totalPostDeleted}</p>

        <div>
          <div
            onClick={toggleDailyChartData}
            className="flex items-center cursor-pointer text-purple-400 mt-2"
          >
            <span>Daily Chart Data:</span>
            {showDailyChartData ? (
              <ChevronUpIcon className="h-5 w-5 ml-1" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 ml-1" />
            )}
          </div>
          {showDailyChartData ? (
            <ul className="mt-2 transition-all duration-300 ease-in-out">
              {contentMetrics.daily.chartData.map((data, index) => (
                <li key={index}>
                  {data.timestamp}: {data.count} posts
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-2 transition-all duration-300 ease-in-out">
              {contentMetrics.daily.chartData.slice(0, 4).map((data, index) => (
                <li key={index}>
                  {data.timestamp}: {data.count} posts
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-medium">Content Metrics (Monthly)</h3>
        <p>Total Posts: {contentMetrics.monthly.totalPosts}</p>
        <p>Total Categories: {contentMetrics.monthly.totalCategory}</p>
        <p>Total Post Exits: {contentMetrics.monthly.totalPostExitCount}</p>
        <p>Total Post Shares: {contentMetrics.monthly.totalPostShares}</p>
        <p>Total Views: {contentMetrics.monthly.totalViews}</p>
        <p>Total Comments: {contentMetrics.monthly.totalComments}</p>
        <p>Total Post Blocked: {contentMetrics.monthly.totalPostBlocked}</p>
        <p>Total Post Deleted: {contentMetrics.monthly.totalPostDeleted}</p>

        <div>
          <div
            onClick={toggleMonthlyChartData}
            className="flex items-center cursor-pointer text-purple-400 mt-2"
          >
            <span>Monthly Chart Data:</span>
            {showMonthlyChartData ? (
              <ChevronUpIcon className="h-5 w-5 ml-1" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 ml-1" />
            )}
          </div>
          {showMonthlyChartData ? (
            <ul className="mt-2 transition-all duration-300 ease-in-out">
              {contentMetrics.monthly.chartData.map((data, index) => (
                <li key={index}>
                  {data.timestamp}: {data.count} posts
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-2 transition-all duration-300 ease-in-out">
              {contentMetrics.monthly.chartData.slice(0, 4).map((data, index) => (
                <li key={index}>
                  {data.timestamp}: {data.count} posts
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
};

ContentModeration.propTypes = {
  contentMetrics: PropTypes.object.isRequired,
};

export default ContentModeration;
