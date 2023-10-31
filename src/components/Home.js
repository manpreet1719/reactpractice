import { useEffect, useState } from 'react';
import Card from './Card'
import Pagination from './Pagination'
const Home = () => {

    let [data, setData] = useState([]);
    let [total,settotal] = useState(0);
    let [page,setPage] = useState(1);

    useEffect(() => {
        getResult();
    },[page]);

    async function getResult() {
        const result = await fetch(`https://dummyjson.com/products?limit=10&skip=${(page-1)*10}`);
        const data = await result.json();
        setData(data.products);
        settotal(data.total);
    }


    return (
        <>
            <section id="portfolio">
                <div class="container">
                    <h1 class="text-center">Products</h1>
                    <div class="row">
                        {
                            data.map((data) => {
                                return <Card data={data}/>
                            })
                        }
                    </div>
                </div>
            </section>
            <Pagination 
            total={total} 
            page={page} 
            setPage={setPage}
            ></Pagination>
        </>
    );
}
export default Home;