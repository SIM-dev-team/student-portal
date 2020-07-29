import React , {useState , useEffect} from 'react'
import '../App.css';
import CategoryListItem from './CategoryListItem';



const catList = [
    {   
        id : 1,
        name : 'A company'
    },
    {
        id : 2,
        name : 'B company'
    },
    {
        id : 3,
        name : 'C company'
    },
    {
        id : 4,
        name : 'D company'
    },
    {
        id : 5,
        name : 'E company'
    },
    {   
        id : 6,
        name : 'F company'
    },
    {
        id : 7,
        name : 'G company'
    },
    {
        id : 8,
        name : 'I company'
    },
    {
        id : 9,
        name : 'J company'
    },
    {
        id : 10,
        name : 'K company'
    
    }
]

function CategoryList() {
    const [categoryList , setCategoryList] = useState([]);

    useEffect(()=>{
        setCategoryList(catList);
    },[])

    return (
        <div className="category-section">
            {categoryList.map((category) =>{
                return(
                    <CategoryListItem key={category.id} category={category} />
                );
            })}
        </div>
    )
}

export default CategoryList
