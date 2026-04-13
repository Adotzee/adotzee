import { MetadataRoute } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import { collegeService } from '@/features/colleges/collegeService';
import { courseService } from '@/features/courses/courseService';
import { College, Course } from '@/types';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = COMPANY_INFO.fullUrl;

    // Fetch dynamic data for colleges and courses with strict typing
    let colleges: College[] = [];
    let courses: Course[] = [];

    try {
        const [collegesData, coursesData] = await Promise.all([
            collegeService.getAll(),
            courseService.getAll()
        ]);
        colleges = Array.isArray(collegesData) ? (collegesData as College[]) : [];
        courses = Array.isArray(coursesData) ? (coursesData as Course[]) : [];
    } catch (error) {
        console.error("Failed to fetch sitemap data:", error);
    }

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/colleges`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/courses`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/addons`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/recommendations`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
    ];

    const collegeRoutes: MetadataRoute.Sitemap = colleges.map((college) => ({
        url: `${baseUrl}/colleges/${college.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
    }));

    const courseRoutes: MetadataRoute.Sitemap = courses.map((course) => ({
        url: `${baseUrl}/courses/${course.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
    }));

    return [...staticRoutes, ...collegeRoutes, ...courseRoutes];
}
