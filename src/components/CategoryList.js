import React , {useState , useEffect} from 'react'
import '../App.css';
import CategoryListItem from './CategoryListItem';
import axios from 'axios'


function CategoryList() {
    const [categoryList , setCategoryList] = useState([]);

    useEffect(()=>{
        axios
          .get("http://localhost:5000/advert/getCategories")
          .then(res => {
            setCategoryList(res.data);
            // console.log(res.data)
          })
          .catch(err => console.error(err));
    },[])

    return (
        <div className="category-section">
            {categoryList.map((category) =>{
                return(
                    <CategoryListItem key={category.cat_id} category={category} />
                );
            })}
        </div>
    )
}

export default CategoryList
