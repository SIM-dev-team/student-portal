import React from 'react'
import {Link} from 'react-router-dom';


function CategoryListItem(params) {
    return (
        <div>
            <Link to ={`/category/${params.category.cat_id}`} name={params.category.cat_name}>
            <div className="row category-list-item">
                <div className="category-list-item-name">
                    {params.category.cat_name}
                </div>
            </div>
            </Link>
        </div>
    )
}

export default CategoryListItem