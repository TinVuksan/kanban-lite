import Home from '../../assets/Home.svg';
import Sphere from '../../assets/Sphere.svg';

export const BreadCrumbs = () => {
    return (
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
            <img src={Home} alt="Home" />
            <span>/</span>
            <span>Dashboard</span>
            <span>/</span>
            <span>Project</span>
            <span>/</span>
            <span className="text-primary flex gap-1">
                <img src={Sphere} alt="Sphere" />
                Project PlanetX
            </span>
        </div>
    );
};
