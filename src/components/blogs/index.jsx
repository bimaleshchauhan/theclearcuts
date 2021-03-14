import React from 'react';


const blogpage = (props) =>{
      console.log("dfsfdfs", props)

     const rawMarkup =(text) =>{
        var rawMarkup = text
        return { __html: rawMarkup };
    }

      if(props.item.id===props.id){
        return(
            <div className="blog-item ql-snow">
                <div className="title">
                    {props.item.title}
                </div> 
                <div className="about-user">
                </div> 
                <div className="content ql-editor">
                   <div dangerouslySetInnerHTML={rawMarkup(props.item.contents)} />
                   
                </div>
            </div>
        )
      }
      else{
          return null;
      }
}
export default blogpage;