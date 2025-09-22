import React, { useEffect } from 'react';
import { GraduationCap, Building2, Plus, Users, BookOpen, Award, BarChart3 } from 'lucide-react';
import StatsCard from './StatsCard';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { apiService } from '../../services/api';
import { useApi } from '../../hooks/useApi';

const Dashboard: React.FC = () => {
 const { data: coursesResponse, loading: coursesLoading } = useApi(() => apiService.getCourses());
const { data: collegesResponse, loading: collegesLoading } = useApi(() => apiService.getColleges());
const { data: addonsResponse, loading: addonsLoading } = useApi(() => apiService.getAddons());

const courses = coursesResponse?.data || [];
const colleges = collegesResponse?.data || [];
const addons = addonsResponse?.data || [];
useEffect(()=>{
console.log(coursesResponse)
})

  const loading = coursesLoading || collegesLoading || addonsLoading;
  
  const stats = {
    totalCourses: courses?.length || 0,
    totalColleges: colleges?.length || 0,
    totalAddons: addons?.length || 0,
    ugCourses: courses?.filter((course: any) => course.type === 'UG').length || 0,
    pgCourses: courses?.filter((course: any) => course.type === 'PG').length || 0,
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-lg text-gray-600">Welcome back! Here's what's happening with your platform.</p>
        </div>
        <div className="flex space-x-3 mt-4 lg:mt-0">
          <Button variant="outline" icon={BarChart3}>
            View Reports
          </Button>
          <Button icon={Plus}>
            Quick Add
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Courses"
          value={stats.totalCourses}
          icon={GraduationCap}
          color="blue"
          subtitle={`${stats.ugCourses} UG, ${stats.pgCourses} PG`}
          trend={8.2}
          loading={loading}
        />
        <StatsCard
          title="Total Colleges"
          value={stats.totalColleges}
          icon={Building2}
          color="green"
          trend={12.5}
          loading={loading}
        />
        <StatsCard
          title="Total Addons"
          value={stats.totalAddons}
          icon={Plus}
          color="purple"
          trend={-2.1}
          loading={loading}
        />
        <StatsCard
          title="Active Users"
          value={1247}
          icon={Users}
          color="orange"
          subtitle="This month"
          trend={15.3}
          loading={loading}
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card hover className="h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
              <Button variant="ghost" size="sm">View All</Button>
             
            </div>
            <div className="space-y-4">
              {[
                { type: 'course', action: 'New course "Computer Science" added', time: '2 hours ago', color: 'blue' },
                { type: 'college', action: 'College "MIT University" updated', time: '4 hours ago', color: 'green' },
                { type: 'addon', action: 'New addon "AI Specialization" created', time: '6 hours ago', color: 'purple' },
                { type: 'user', action: '15 new student registrations', time: '1 day ago', color: 'orange' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className={`w-3 h-3 rounded-full bg-${activity.color}-500`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <Card hover className="h-full">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
            <div className="space-y-4">
              {[
                { title: 'Add New Course', desc: 'Create a new academic program', icon: BookOpen, color: 'blue' },
                { title: 'Register College', desc: 'Add educational institution', icon: Building2, color: 'green' },
                { title: 'Create Addon', desc: 'Add supplementary courses', icon: Award, color: 'purple' },
              ].map((action, index) => (
                <button
                  key={index}
                  className="w-full text-left bg-blue-200 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-${action.color}-100 text-${action.color}-600 group-hover:scale-110 transition-transform`}>
                      <action.icon size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{action.title}</div>
                      <div className="text-sm text-gray-600">{action.desc}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Performance Chart Placeholder */}
      <Card hover>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Platform Analytics</h3>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm">7D</Button>
            <Button variant="ghost" size="sm">30D</Button>
            <Button size="sm">90D</Button>
          </div>
        </div>
        <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <BarChart3 size={48} className="text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 font-medium">Analytics Chart Coming Soon</p>
            <p className="text-sm text-gray-500">Track your platform's performance metrics</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;