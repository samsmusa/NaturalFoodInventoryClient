import React, { useState } from "react";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function MyComponent({setData}) {
  
    return (
        <div className="custom-ck">
      <CKEditor
                    editor={ ClassicEditor }
                    id='ck'
                    data="<p>fdkkd d f djfk kdfj kd</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setData(data);
                    } }
                />
                </div>
    );
  }

// ReactDOM.render(<MyEditor />, document.getElementById('container'));
export default MyComponent;