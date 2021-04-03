import React, {useState } from 'react';

import { useQuill } from "react-quilljs";
import FormUser from "../hoc/FormUser";
import validator from "../hoc/Validator";
import axios from "axios"

const BlogCreate = () =>{
  //  const { quill, quillRef } = useQuill();
     const [title,setTitle] = useState("");

     const form =[
        {
            type:"blog_title",
            required:true,
            value:"",
            validate:[
                {
                    name:'required',
                    message:'Blog title is required'
                },
                
            ]
        },
    ]

     const {
        values,
        errors,
        validation,
        handleChange,
        handleSubmit,
      } = FormUser(submitBlog, validator, form);
    
    // var toolbarOptions = {
    //     handlers: {
    //       // handlers object will be merged with default handlers object
    //       'link': function(value) {
    //         if (value) {
    //           var href = prompt('Enter the URL');
    //           this.quill.format('link', href);
    //         } else {
    //           this.quill.format('link', false);
    //         }
    //       }
    //     }
    //   }

      
    const theme = 'snow';
    const tool = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['link', 'image', 'video'],
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']      
    ]
    const modules = {
        toolbar: tool,
        clipboard: {
            matchVisual: true,
            // matchers: [
            //     ['B', customMatcherA],
            //     [Node.TEXT_NODE, customMatcherB]
            //   ]
          },
         
          
         
      };
    
     // const placeholder = 'Compose an epic...';
    
      const formats = ['bold', 'italic', 'underline', 'strike','blockquote', 'code-block','header','list', 'size', 'header', 'script',
      'link', 'image', 'video', 'indent', 'direction', 'size', 'font',
      'color', 'background',
      'clean', ];
    
      const {quill, quillRef } = useQuill({ theme, modules, formats });

    //   var editor_content = quill.container.firstChild.innerHTML
    // console.log("editor_content", editor_content)

//   React.useEffect(() => {
//     if (quill) {
//       quill.on('text-change', () => {
//         console.log('Text change!');
//       })
//     }
//   }, [quill]);
   

   function submitBlog (){
        let editor_content = quill.container.firstChild.innerHTML;
        axios.post(process.env.REACT_APP_API_KEY+"/v1/api/article/create",{
            title:values.title,
            contents:editor_content,
            user: "603a437de86a1bd5ac7a91ff"
         }).then(response =>{
            if(response.data.success){
                
            }
         })
    }




    return (
        <div className="create-blog">
           <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page--title">
                             Create New Blog  
                        </div>
                        <div className="blog-title">
                            <label htmlFor="">Blog Title</label>
                            <div className="title-text">
                                <input type="text" value={values.title || ''} name="blog_title" onInput={handleChange} placeholder="Enter blog title"  />
                                {errors.blog_title && (
                                    <p className="help is-danger">{errors.blog_title}</p>
                                )}
                            </div>
                        </div>
                        <div className="text-editor">
                            <div ref={quillRef} />
                        </div>
                        <div className="submit-blog">
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    </div> 
                </div>
           </div>
           
        </div>
      );
}
export default BlogCreate;