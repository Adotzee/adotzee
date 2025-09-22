// src/services/api.ts
import axiosInstance from './axiosInstance';

class ApiService {
  // Courses
  async getCourses() {
    const res = await axiosInstance.get('/courses');
    return res.data;
  }

  async getCourse(id: number) {
    const res = await axiosInstance.get(`/courses/${id}`);
    return res.data;
  }

  async createCourse(data: any) {
    const res = await axiosInstance.post('/courses', data);
    return res.data;
  }

  async updateCourse(data: any) {
    const res = await axiosInstance.put('/courses', data);
    return res.data;
  }

  async deleteCourse(id: number) {
    const res = await axiosInstance.delete(`/courses/${id}`);
    return res.data;
  }

  async filterCourses(type: string, stream: string) {
    const res = await axiosInstance.get(`/courses/filter`, {
      params: { type, stream },
    });
    return res.data;
  }

  async getCourseStats() {
    const res = await axiosInstance.get('/courses/stats');
    return res.data;
  }

  // Colleges
  async getColleges() {
    const res = await axiosInstance.get('/colleges');
    return res.data;
  }

  async getCollege(id: number) {
    const res = await axiosInstance.get(`/colleges/${id}`);
    return res.data;
  }

  async createCollege(data: any) {
    const res = await axiosInstance.post('/colleges', data);
    return res.data;
  }

  async updateCollege(data: any) {
    const res = await axiosInstance.put('/colleges', data);
    return res.data;
  }

  async deleteCollege(id: number) {
    const res = await axiosInstance.delete(`/colleges/${id}`);
    return res.data;
  }

  // Addons
  async getAddons() {
    const res = await axiosInstance.get('/addons');
    return res.data;
  }

  async getAddon(id: number) {
    const res = await axiosInstance.get(`/addons/${id}`);
    return res.data;
  }

  async createAddon(data: any) {
    const res = await axiosInstance.post('/addons', data);
    return res.data;
  }

  async updateAddon(id: number, data: any) {
    const res = await axiosInstance.put(`/addons/${id}`, data);
    return res.data;
  }

  async deleteAddon(id: number) {
    const res = await axiosInstance.delete(`/addons/${id}`);
    return res.data;
  }

  async getAddonsByCourse(courseId: number) {
    const res = await axiosInstance.get(`/addons/by-course/${courseId}`);
    return res.data;
  }
}

export const apiService = new ApiService();
