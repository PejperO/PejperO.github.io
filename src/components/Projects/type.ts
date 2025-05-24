export interface Project {
    title: string;
    disclamer?: string;
    subtitle?: string;
    link?: string;
    img: string;
    overview: string[];
    features: {
        title: string;
        description?: string;
        link?: string;
    }[];
    extra?: {
        title: string;
        data: string[];
    }[];
}