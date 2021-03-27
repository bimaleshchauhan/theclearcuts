import {useState, useRef, useEffect} from 'react';
import axios from "axios";
import BlogPage from "../components/blogs"

const Blogs = ({match:{params:{id, sub_id}}}) =>{
    const [list, setList] = useState("");
    const isMount = useRef(true);
    useEffect(() =>{
        if(isMount.current){
            axios.get(process.env.REACT_APP_API_KEY+"/v1/api/article/get_all")
            .then(response =>{
                if(response.data.success){
                    if(response.data.data){
                         setList(response.data.data)
                    }
                }
            })
            isMount.current=false
        }
        else{
            isMount.current=true
        }
    })  
   
    if(list && list.length>0){    
        return(
            <div className="blogs">
                {list.map((item, index) =>
                <BlogPage item={item} id={id} key={index} />
            )}
            </div>
        )
    }
    else{
        return (
            <div></div>
        )
    }
    // if(sub_id===12){
    //     return(
    //     <div className="blogs">
    //          sub id - {sub_id}  
    //     </div>
    //     )
    //  }
    // else if(id===1){
    //     return(
    //       <div className="blogs">
    //       id - {id}
    //       </div>
    //     )
    //   }
    // else{
    //     return(
    //         <div>dfsfdsfs</div> 
    //         // <Redirect to={{pathname:"/404"}} />
    //     )
    // }
   
}
export default Blogs