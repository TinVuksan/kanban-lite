import { useFetchTodos } from '../../hooks/useFetchTodos';
import { HomeTemplate } from '../templates/HomeTemplate';

export const HomePage = () => {
    const { data, loading, error } = useFetchTodos();

    console.log('UseFetchTodos: ', data);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-danger">{error}</div>;
    if (data) return <HomeTemplate data={data} />;
};
