// ShowCode.jsx
import React from 'react';
import codeSamples from '../Data/data';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ShowCode = (props) => {
    return (
        <div>
            <SyntaxHighlighter language={props.code} style={oneLight}>
                {codeSamples[props.code]} {/* ✅ this is correct */}
            </SyntaxHighlighter>
        </div>
    );
}

export default ShowCode;