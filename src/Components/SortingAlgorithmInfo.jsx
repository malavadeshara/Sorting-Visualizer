import React from 'react';
import C_Logo from '../Images/C_Logo.png'
import CPP_Logo from '../Images/cppLogo.png'
import JAVA_Logo from '../Images/JAVALogo.webp'
import JS_Logo from '../Images/jsLogo.webp'
import PYTHON_Logo from '../Images/pyLogo.png'
import ShowCode from '../Components/ShowCode'


const SortingAlgorithmInfo = () => {

    const [language, setLanguage] = React.useState('c');

    const buttonClickHandler = (e) => {
        const button = e.currentTarget;
        button.classList.add('clickAnimation');
        setLanguage(e.currentTarget.getAttribute('value'));
        setTimeout(() => {
            button.classList.remove('clickAnimation');
        }, 300);
    }

    return (
        <div className='w-full flex flex-wrap justify-center items-center gap-12 py-10 flex-col border-2'>
            <div className='w-10/12 flex justify-between items-start gap-24 border-2'>
                <div className='flex flex-col justify-center items-start gap-8 w-3/5 h-[540px] p-4'>

                    <h1 className='text-4xl font-bold self-start'>Description (Bubblesort Algorithm) : </h1>

                    <div className='flex flex-col justify-center items-center gap-5'>
                        <p className='text-2xl font-medium text-gray-600'>
                            Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles in sparkling water. The bubbles represents the elements of the data structure.
                        </p>

                        <p className='text-2xl font-medium text-gray-600'>
                            The bigger bubbles reach the top faster than smaller bubbles, and this algorithm works in the same way. It iterates through the data structure and for each cycle compares the current element with the next one, swapping them if they are in the wrong order.
                        </p>

                        <p className='text-2xl font-medium text-gray-600'>
                            It's a simple algorithm to implement, but not much efficient: on average, quadratic sorting algorithms with the same time complexity such as Selection Sort or Insertion Sort perform better.
                        </p>
                    </div>
                </div>

                <div className='w-2/5 flex justify-center flex-col items-start gap-8 p-4'>
                    <h1 className='text-4xl font-bold self-start'>Complexity Analysis : </h1>
                    <div className='flex flex-col justify-center items-center'>
                        <table className='text-2xl font-medium text-gray-600 p-2'>
                            <tr className='border-b-2 border-gray-800 p-2'>
                                <td className='border-r-2 border-gray-800 p-2'>Average Complexity</td>
                                <td className='p-2'>O(n<sup>2</sup>)</td>
                            </tr>
                            <tr className='border-b-2 border-gray-800 p-2'>
                                <td className='border-r-2 border-gray-800 p-2'>Best Complexity</td>
                                <td className='p-2'>O(n)</td>
                            </tr>
                            <tr className='border-b-2 border-gray-800 p-2'>
                                <td className='border-r-2 border-gray-800 p-2'>Worst Complexity</td>
                                <td className='p-2'>O(n<sup>2</sup>)</td>
                            </tr>
                            <tr className='p-2'>
                                <td className='border-r-2 border-gray-800 p-2'>Space Complexity</td>
                                <td className='p-2'>O(1)</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div className='w-10/12 flex justify-center items-start gap-24 py-10 border-2'>
                <div className='relative w-1/2 h-[600px] gap-8 border-2 flex flex-col items-start justify-center p-4'>
                    <h1 className='text-4xl font-bold self-start'>Implementation : </h1>

                    <div className='w-full border-2 h-full flex flex-col gap-4 p-4'>
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

                        <div className='border-2 bg-gray-200 '>
                            <ShowCode code={language} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SortingAlgorithmInfo;