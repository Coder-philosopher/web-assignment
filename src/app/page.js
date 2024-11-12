"use client";

import { useEffect, useState } from 'react';
import UserManagement from '../components/UserManagement/UserManagement';
import ContentModeration from '../components/ContentModeration/ContentModeration';
import Analytics from '../components/Analytics/Analytics';

export default function Home() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch('/api/dashboard', {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        if (data.status === 'success') {
          setDashboardData(data.dashboard);
        } else {
          throw new Error(`API response error: ${data.message}`);
        }
      } catch (error) {
        console.error('API Fetch Error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        <p className="ml-4 text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">Error: {error}</div>;
  }

  if (!dashboardData) {
    return <div className="text-center text-red-500 mt-10">Error: Could not fetch dashboard data.</div>;
  }

  return (
    <div className="container mx-auto p-4 text-gray-300 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center my-8 text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105">
        Admin Dashboard
      </h1>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <UserManagement userMetrics={dashboardData.userMetrics} />
        <ContentModeration contentMetrics={dashboardData.contentMetrics} />
        <Analytics userMetrics={dashboardData.userMetrics} contentMetrics={dashboardData.contentMetrics} />
      </div>
    </div>
  );
}
