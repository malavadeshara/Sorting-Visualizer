import React from 'react';
import C_Logo from '../Images/C_Logo.png'
import CPP_Logo from '../Images/cppLogo.png'
import JAVA_Logo from '../Images/JAVALogo.webp'
import JS_Logo from '../Images/jsLogo.webp'
import PYTHON_Logo from '../Images/pyLogo.png'
import ShowCode from '../Components/ShowCode'
import Data from '../Data/SortingVisualizerData'


const SortingAlgorithmInfo = (props) => {

    const [language, setLanguage] = React.useState('c');

    const buttonClickHandler = (e) => {
        const button = e.currentTarget;
        button.classList.add('clickAnimation');
        setLanguage(e.currentTarget.getAttribute('value'));
        setTimeout(() => {
            button.classList.remove('clickAnimation');
        }, 300);
    }

    const description = Data[props.selectedAlgorithm]?.Description;

    if (!description) return <p>No data available for {props.selectedAlgorithm}</p>;

    const renderParagraph = (para, index) => {
        if (typeof para === 'string') {
            return <p key={index} className="text-2xl font-medium text-gray-600">{para}</p>;
        }

        if (para.parts && Array.isArray(para.parts)) {
            return (
                <p key={index} className="text-2xl font-medium text-gray-600">
                    {para.parts.map((part, idx) => {
                        if (part.type === 'text') {
                            return <span key={idx}>{part.content}</span>;
                        }
                        if (part.type === 'clickable') {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => onNavigate?.(part.onClickId)}
                                    className="text-blue-600 hover:underline mx-1"
                                >
                                    {part.label}
                                </button>
                            );
                        }
                        return null;
                    })}
                </p>
            );
        }
        return null;
    };

    return (
        <div className='w-full flex flex-wrap justify-center items-center gap-12 py-10 flex-col'>
            <div className='w-10/12 flex justify-between items-start gap-24'>
                <div className='flex flex-col justify-start items-start gap-8 w-3/5 h-[540px] p-4'>

                    <h1 className='text-4xl font-bold self-start'>
                        {`Description (${props.selectedAlgorithm.replace(/([A-Z])/g, ' $1').replace(/^./, char => char.toUpperCase())}) :`}
                    </h1>


                    <div className='flex flex-col justify-center items-center gap-5'>
                        {Object.keys(description).map((key, index) => renderParagraph(description[key], index))}
                    </div>
                </div>

                <div className='w-2/5 flex justify-center flex-col items-start gap-8 p-4'>
                    <h1 className='text-4xl font-bold self-start'>Complexity Analysis : </h1>
                    <div className='flex flex-col justify-center items-center'>
                        <table className='text-2xl font-medium text-gray-600 p-2'>
                            <tr className='border-b-2 border-gray-800 p-2'>
                                <td className='border-r-2 border-gray-800 p-2'>Average Complexity</td>
                                <td className='p-2'>{Data[props.selectedAlgorithm].timeComplexity.average}</td>
                            </tr>
                            <tr className='border-b-2 border-gray-800 p-2'>
                                <td className='border-r-2 border-gray-800 p-2'>Best Complexity</td>
                                <td className='p-2'>{Data[props.selectedAlgorithm].timeComplexity.best}</td>
                            </tr>
                            <tr className='border-b-2 border-gray-800 p-2'>
                                <td className='border-r-2 border-gray-800 p-2'>Worst Complexity</td>
                                <td className='p-2'>{Data[props.selectedAlgorithm].timeComplexity.worst}</td>
                            </tr>
                            <tr className='p-2'>
                                <td className='border-r-2 border-gray-800 p-2'>Space Complexity</td>
                                <td className='p-2'>{Data[props.selectedAlgorithm].spaceComplexity}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div className='w-10/12 flex justify-start items-start gap-24 py-10'>
                <div className='relative w-1/2 h-[700px] gap-8 flex flex-col items-start justify-start p-4'>
                    <h1 className='text-4xl font-bold min-h-[50px] self-start'>Implementation : </h1>

                    <div className='w-full flex max-h-[550px] flex-col gap-4 p-4'>
                        <div className='h-[60px] max-w-fit flex gap-2 items-center'>
                            <div className='w-[70px] h-[50px] flex justify-center items-center border-2 rounded-[10px] cursor-pointer group' onClick={(e) => { buttonClickHandler(e); }} value='c'>
                                <div className='h-[40px] w-[40px] flex justify-center items-center p-1'>
                                    <img src={C_Logo} className='h-[100%] w-[100%]' />
                                </div>
                            </div>
                            <div className='w-[70px] h-[50px] flex justify-center items-center border-2 rounded-[10px] cursor-pointer group' onClick={(e) => { buttonClickHandler(e); }} value='cpp'>
                                <div className='h-[40px] w-[40px] flex justify-center items-center p-1'>
                                    <img src={CPP_Logo} className='h-[100%] w-[100%]' />
                                </div>
                            </div>
                            <div className='w-[70px] h-[50px] flex justify-center items-center border-2 rounded-[10px] cursor-pointer group' onClick={(e) => { buttonClickHandler(e); }} value='java'>
                                <div className='h-[40px] w-[40px] flex justify-center items-center p-1'>
                                    <img src={JAVA_Logo} className='h-[100%] w-[100%]' />
                                </div>
                            </div>
                            <div className='w-[70px] h-[50px] flex justify-center items-center border-2 rounded-[10px] cursor-pointer group' onClick={(e) => { buttonClickHandler(e); }} value='javascript'>
                                <div className='h-[40px] w-[40px] flex justify-center items-center p-1'>
                                    <img src={JS_Logo} className='h-[100%] w-[100%]' />
                                </div>
                            </div>
                            <div className='w-[70px] h-[50px] flex justify-center items-center border-2 rounded-[10px] cursor-pointer group' onClick={(e) => { buttonClickHandler(e); }} value='python'>
                                <div className='h-[40px] w-[40px] flex justify-center items-center p-1'>
                                    <img src={PYTHON_Logo} className='h-[100%] w-[100%]' />
                                </div>
                            </div>
                        </div>

                        <div className='border-2 overflow-scroll'>
                            <ShowCode code={language} selectedAlgorithm={props.selectedAlgorithm}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SortingAlgorithmInfo;