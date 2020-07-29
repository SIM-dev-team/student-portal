import React from 'react'
import {Link} from 'react-router-dom';


function CategoryListItem(params) {
    return (
        <div>
            <Link to ={`/category/${params.category.id}`}>
            <div className="row category-list-item">
                <div className="category-list-item-name">
                    {params.category.name}
                </div>
            </div>
            </Link>
            <Link to ={`/category/${params.category.id}`}>
            <div className="row category-list-item">
                <div className="category-list-item-name">
                    {params.category.name}
                </div>
            </div>
            </Link>
        </div>
    )
}

export default CategoryListItem