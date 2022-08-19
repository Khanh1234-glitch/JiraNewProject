import React,{ useEffect, useRef  } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { createCategory } from '../../Slices/Category';
type Props = {}

const ProjectSetting = (props: Props) => {
  const { data } = useSelector(
    (state:RootState) => state.Category
  )
    const dispatch = useDispatch<any>();
    useEffect(()=>{
      dispatch(createCategory())
    },[]);
  const editorRef = useRef(null);
  const log = (content:any) => {
    console.log(content);
  };

  
  return (
    <div className='container '>
      <h3>Create Project</h3>
      <form className="container">
        <div className="form-group">
          <p>Name</p>
          <input type="text" className='form-control' name='projectName'/>
        </div>
        <div className="form-group">
          <p>description</p>
          <input type="text" className='form-control' name='description'/>
          <Editor
         initialValue="<p>This is the initial content of the editor.</p>"
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
         onEditorChange={log}
       />
        </div>
        <div className="form-group">
        <select name="categoryId" className='form-control'>
<!--           {data.map((category)=>{
            return (
              <option >{category.projectCategoryName}</option>
            )
          })} -->

          <option >Web</option>
          <option >App</option>
        </select>
        </div>
        <button className='btn btn-outline-primary' type='submit'>Create project</button>
      </form>
    </div>
  )
}

export default ProjectSetting
