import PropTypes from 'prop-types';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

const UserManagement = ({ userMetrics }) => {
  const [showDailyMore, setShowDailyMore] = useState(false);
  const [showMonthlyMore, setShowMonthlyMore] = useState(false);

  const toggleShowMoreDaily = () => setShowDailyMore(!showDailyMore);
  const toggleShowMoreMonthly = () => setShowMonthlyMore(!showMonthlyMore);

  const initialItemsToShow = 4;

  return (
    <div className="bg-gray-800 p-6 shadow-lg rounded-lg mt-6 text-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-purple-400">User Management</h2>

      <section className="mb-6">
        <h3 className="text-xl font-medium text-purple-300 mb-2">User Metrics (Daily)</h3>
        <div className="space-y-2">
          <p>Total Users: <span className="font-semibold">{userMetrics.daily.totalUser}</span></p>
          <p>Active Users: <span className="font-semibold">{userMetrics.daily.activeUser}</span></p>
          <p>Creators: <span className="font-semibold">{userMetrics.daily.creator}</span></p>
          <p>Total Referrals: <span className="font-semibold">{userMetrics.daily.totalReferral}</span></p>
        </div>
        <div className="mt-4">
          <p className="text-lg font-medium text-purple-300">Daily User Chart Data:</p>
          <ul className="pl-4 list-disc">
            {userMetrics.daily.chartData.slice(0, showDailyMore ? userMetrics.daily.chartData.length : initialItemsToShow).map((data, index) => (
              <li key={index} className="text-sm text-gray-400">
                {data.timestamp}: {data.count} users
              </li>
            ))}
          </ul>
          {userMetrics.daily.chartData.length > initialItemsToShow && (
            <button
              onClick={toggleShowMoreDaily}
              className="flex items-center text-purple-300 mt-2 hover:text-purple-500 transition-colors duration-300"
            >
              {showDailyMore ? 'Show Less' : 'Show More'}
              {showDailyMore ? <ChevronUpIcon className="w-5 h-5 ml-1" /> : <ChevronDownIcon className="w-5 h-5 ml-1" />}
            </button>
          )}
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-medium text-purple-300 mb-2">User Metrics (Monthly)</h3>
        <div className="space-y-2">
          <p>Total Users: <span className="font-semibold">{userMetrics.monthly.totalUser}</span></p>
          <p>Active Users: <span className="font-semibold">{userMetrics.monthly.activeUser}</span></p>
          <p>Creators: <span className="font-semibold">{userMetrics.monthly.creator}</span></p>
          <p>Total Referrals: <span className="font-semibold">{userMetrics.monthly.totalReferral}</span></p>
        </div>
        <div className="mt-4">
          <p className="text-lg font-medium text-purple-300">Monthly User Chart Data:</p>
          <ul className="pl-4 list-disc">
            {userMetrics.monthly.chartData.slice(0, showMonthlyMore ? userMetrics.monthly.chartData.length : initialItemsToShow).map((data, index) => (
              <li key={index} className="text-sm text-gray-400">
                {data.timestamp}: {data.count} users
              </li>
            ))}
          </ul>
          {userMetrics.monthly.chartData.length > initialItemsToShow && (
            <button
              onClick={toggleShowMoreMonthly}
              className="flex items-center text-purple-300 mt-2 hover:text-purple-500 transition-colors duration-300"
            >
              {showMonthlyMore ? 'Show Less' : 'Show More'}
              {showMonthlyMore ? <ChevronUpIcon className="w-5 h-5 ml-1" /> : <ChevronDownIcon className="w-5 h-5 ml-1" />}
            </button>
          )}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-medium text-purple-300 mb-2">User Metrics (All Time)</h3>
        <div className="space-y-2">
          <p>Total Users: <span className="font-semibold">{userMetrics.allTime.totalUser}</span></p>
          <p>Active Users: <span className="font-semibold">{userMetrics.allTime.activeUser}</span></p>
          <p>Creators: <span className="font-semibold">{userMetrics.allTime.creator}</span></p>
          <p>Total Referrals: <span className="font-semibold">{userMetrics.allTime.totalReferral}</span></p>
        </div>
      </section>
    </div>
  );
};

UserManagement.propTypes = {
  userMetrics: PropTypes.object.isRequired,
};

export default UserManagement;
