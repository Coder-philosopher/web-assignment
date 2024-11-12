import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch('https://api.socialverseapp.com/admin/dashboard');
        const data = await response.json();

        if (data.status === 'success') {
          setDashboardData(data.dashboard);
        } else {
          console.error('Error fetching data:', data.message);
        }
      } catch (error) {
        console.error('API Fetch Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <div className="text-gray-400 text-center">Loading...</div>;
  }

  if (!dashboardData) {
    return <div className="text-red-500 text-center">Error: Could not fetch dashboard data.</div>;
  }

  const { userMetrics, contentMetrics } = dashboardData;

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-400">Dashboard</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-purple-300">User Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 shadow-lg rounded-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-xl font-medium text-purple-400 mb-2">Daily Metrics</h3>
            <p>Total Users: <span className="font-semibold">{userMetrics.daily.totalUser}</span></p>
            <p>Active Users: <span className="font-semibold">{userMetrics.daily.activeUser}</span></p>
            <p>Referrals: <span className="font-semibold">{userMetrics.daily.totalReferral}</span></p>
            <p>Creators: <span className="font-semibold">{userMetrics.daily.creator}</span></p>
          </div>

          <div className="bg-gray-800 p-6 shadow-lg rounded-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-xl font-medium text-purple-400 mb-2">Monthly Metrics</h3>
            <p>Total Users: <span className="font-semibold">{userMetrics.monthly.totalUser}</span></p>
            <p>Active Users: <span className="font-semibold">{userMetrics.monthly.activeUser}</span></p>
            <p>Referrals: <span className="font-semibold">{userMetrics.monthly.totalReferral}</span></p>
            <p>Creators: <span className="font-semibold">{userMetrics.monthly.creator}</span></p>
          </div>

          <div className="bg-gray-800 p-6 shadow-lg rounded-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-xl font-medium text-purple-400 mb-2">All-Time Metrics</h3>
            <p>Total Users: <span className="font-semibold">{userMetrics.allTime.totalUser}</span></p>
            <p>Active Users: <span className="font-semibold">{userMetrics.allTime.activeUser}</span></p>
            <p>Referrals: <span className="font-semibold">{userMetrics.allTime.totalReferral}</span></p>
            <p>Creators: <span className="font-semibold">{userMetrics.allTime.creator}</span></p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-purple-300">Content Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 shadow-lg rounded-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-xl font-medium text-purple-400 mb-2">Daily Metrics</h3>
            <p>Total Posts: <span className="font-semibold">{contentMetrics.daily.totalPosts}</span></p>
            <p>Total Categories: <span className="font-semibold">{contentMetrics.daily.totalCategory}</span></p>
            <p>Post Shares: <span className="font-semibold">{contentMetrics.daily.totalPostShares}</span></p>
            <p>Post Views: <span className="font-semibold">{contentMetrics.daily.totalViews}</span></p>
          </div>

          <div className="bg-gray-800 p-6 shadow-lg rounded-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-xl font-medium text-purple-400 mb-2">Monthly Metrics</h3>
            <p>Total Posts: <span className="font-semibold">{contentMetrics.monthly.totalPosts}</span></p>
            <p>Total Categories: <span className="font-semibold">{contentMetrics.monthly.totalCategory}</span></p>
            <p>Post Shares: <span className="font-semibold">{contentMetrics.monthly.totalPostShares}</span></p>
            <p>Post Views: <span className="font-semibold">{contentMetrics.monthly.totalViews}</span></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
