import React from "react";
import Article from "./Article"

function ArticleList(props) {
    const { posts } = props;
    console.log(posts)

    const articleElements = posts.map(article => {
        return <Article key={article.id} {...article}/>
    });

    return(
        <main>
            {articleElements}
        </main>
    )
}

export default ArticleList;
