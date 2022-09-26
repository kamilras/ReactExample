import Article from '../components/Article';
import React from 'react';

const articles = [
    {
        id: 1,
        title: "tytuł1",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores praesentium libero accusantium, hic beatae nihil provident doloribus reprehenderit minima soluta perspiciatis obcaecati nobis dicta rem ullam officia in voluptate itaque."
    },
    {
        id: 2,
        title: "tytuł2",
        author: "Włodzimierz Czarzasty",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores praesentium libero accusantium, hic beatae nihil provident doloribus reprehenderit minima soluta perspiciatis obcaecati nobis dicta rem ullam officia in voluptate itaque."
    },
    {
        id: 3,
        title: "tytuł3",
        author: "Robert Kubica",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores praesentium libero accusantium, hic beatae nihil provident doloribus reprehenderit minima soluta perspiciatis obcaecati nobis dicta rem ullam officia in voluptate itaque."
    },
    {
        id: 4,
        title: "tytuł4",
        author: "Tomasz Hajto",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores praesentium libero accusantium, hic beatae nihil provident doloribus reprehenderit minima soluta perspiciatis obcaecati nobis dicta rem ullam officia in voluptate itaque."
    },
]

const HomePage = () => {

    const artList = articles.map(art => (
        <Article key={art.id} {...art} />
    ))

    return (
        <>
            <div>Home page</div>
            {artList}
        </>
    );
}

export default HomePage;