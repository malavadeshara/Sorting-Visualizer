// ShowCode.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import toast from 'react-hot-toast';
import Data from '../Data/SortingVisualizerData';

const ShowCode = (props) => {

    const copyButtonClickHandler = (e) => {
        const button = e.currentTarget;
        button.classList.add('clickAnimation');
        button.children[0].classList.remove('ri-file-copy-line');
        button.children[0].classList.add('ri-file-copy-fill');
        toast.success('Copied!');
        navigator.clipboard.writeText(Data[props.selectedAlgorithm].code[props.code]);
        setTimeout(() => {
            button.classList.remove('clickAnimation');
            button.children[0].classList.remove('ri-file-copy-fill');
            button.children[0].classList.add('ri-file-copy-line');
        }, 300);
    }

    return (
        <div className='relative'>
            <div className='absolute top-2 right-2 copyBtn bg-blue-300 border-2 w-[30px] h-[30px] flex justify-center items-center rounded-xl' onClick={(e) => copyButtonClickHandler(e)} >
                <i className="ri-file-copy-line"></i>
            </div>
            <SyntaxHighlighter language={props.code} style={oneLight}>
                {Data[props.selectedAlgorithm].code[props.code]}
            </SyntaxHighlighter>
        </div>
    );
}

export default ShowCode;