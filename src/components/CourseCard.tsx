import { Star, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  image: string;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  price: string;
}

const CourseCard = ({ image, title, instructor, rating, students, duration, price }: CourseCardProps) => {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return (
    <Link to={`/courses/${slug}`} className="group block rounded-lg overflow-hidden bg-card shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{instructor}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 text-star fill-star" />
            {rating}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {students}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {duration}
          </span>
        </div>
        <p className="font-bold text-secondary">{price}</p>
      </div>
    </Link>
  );
};

export default CourseCard;
