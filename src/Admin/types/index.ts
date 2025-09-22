export interface Course {
  id: number;
  name: string;
  duration: string;
  type: string;
  stream: string;
}

export interface College {
  id: number;
  name: string;
  location: string;
  addons: string[];
}

export interface Addon {
  id: number;
  name: string;
  courseName: string;
  collegeNames: string[];
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}

export interface DashboardStats {
  totalCourses: number;
  totalColleges: number;
  totalAddons: number;
  ugCourses: number;
  pgCourses: number;
}

export interface CourseCreateDTO {
  name: string;
  duration: string;
  type: string;
  stream: string;
}

export interface CourseUpdateDTO extends CourseCreateDTO {
  id: number;
}

export interface CollegeCreateDTO {
  name: string;
  location: string;
  addonIds?: number[];
}

export interface CollegeUpdateDTO extends CollegeCreateDTO {
  id: number;
}

export interface AddonCreateDTO {
  name: string;
  courseId: number;
  collegeIds: number[];
}

export interface AddonUpdateDTO extends AddonCreateDTO {
  id: number;
}