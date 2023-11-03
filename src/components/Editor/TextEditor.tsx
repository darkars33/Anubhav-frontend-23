import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
//import htmlToDraft from 'html-to-draftjs';

const Editor = () => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const changeEditorInput =(data)=>{
        setEditorState(data)
       const x = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        setEditorState(x);
    }
    return (
        <>
    
            <Editor
                editorState={editorState}
                setEditorState={changeEditorInput}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                placeholder="Write here....."
            />
        </>
    )
}

export default Editor;