import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";

const CourseCard = ({ title, description }: { title: string; description: string }) => {
    return (
        <Card className="w-full max-w-xs mx-2  mt-4">
            <CardHeader>
                <CardTitle className="text-xl font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{description}</p>
            </CardContent>
            <CardFooter>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                    Saiba mais
                </button>
            </CardFooter>
        </Card>
    );
}

const CarouselCourses = () => {
    return (
        <div className="container mx-auto py-10 pt-44 flex justify-center items-center flex-col">
            <h1 className="text-4xl font-bold text-white mb-8">
                Além das formações, ganhe acesso a diversos cursos
            </h1>
            <div className="flex overflow-x-scroll space-x-4">
                <CourseCard title="Figma for devs" description="Aprenda Figma de forma prática." />
                <CourseCard title="Produtividade com IA" description="Melhore sua produtividade utilizando IA." />
                <CourseCard title="Acessibilidade com ReactJS" description="Torne suas aplicações acessíveis." />
                <CourseCard title="Apps desktop com Electron" description="Desenvolva apps desktop com Electron." />
            </div>
        </div>
    );
}

export default CarouselCourses;
