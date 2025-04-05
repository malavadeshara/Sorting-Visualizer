import React, { useState, useEffect } from 'react';

const SortingVisualizer = () => {
    const [array, setArray] = useState([]);
    const [animations, setAnimations] = useState([]);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState('');

    useEffect(() => {
        resetArray();
    }, []);

    useEffect(() => {
        if (animations.length === 0) return;

        const arrayBars = document.getElementsByClassName('array-bar');

        animations.forEach((object, index) => {
            const [i, j] = object.index;

            setTimeout(() => {
                if (object.type === "compare") {
                    arrayBars[i].style.backgroundColor = 'red';
                    arrayBars[j].style.backgroundColor = 'red';

                    // Revert back to original color
                    setTimeout(() => {
                        arrayBars[i].style.backgroundColor = 'blue';
                        arrayBars[j].style.backgroundColor = 'blue';
                    }, 50);
                }

                else if (object.type === "swap") {
                    const tempHeight = arrayBars[i].style.height;
                    arrayBars[i].style.height = arrayBars[j].style.height;
                    arrayBars[j].style.height = tempHeight;

                    arrayBars[i].style.backgroundColor = 'blue';
                    arrayBars[j].style.backgroundColor = 'blue';
                }

                else if (object.type === "overwrite") {
                    const [barIndex, newHeight] = object.index;
                    arrayBars[barIndex].style.height = `${newHeight}px`;
                    arrayBars[barIndex].style.backgroundColor = 'green';

                    // Optional: reset color
                    setTimeout(() => {
                        arrayBars[barIndex].style.backgroundColor = 'blue';
                    }, 50);
                }

            }, index * 100);
        });
    }, [animations]);


    function resetArray() {
        const newArray = generateRandomArray(10); // Change size as needed
        setArray(newArray);
        setAnimations([]);
    }

    function generateRandomArray(size) {
        const array = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
        return array;
    }


    function bubbleSort(array) {
        const animations = [];
        const n = array.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                animations.push({ index: [j, j + 1], type: "compare" });
                if (array[j] > array[j + 1]) {
                    animations.push({ index: [j, j + 1], type: "swap" });
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                }
            }
        }
        return animations;
    }


    function mergeSort(array) {
        const animations = [];
        mergeSortHelper(array, 0, array.length - 1, animations);
        return animations;
    }
    
    function mergeSortHelper(array, left, right, animations) {
        if (left < right) {
            const mid = Math.floor((left + right) / 2);
            mergeSortHelper(array, left, mid, animations);
            mergeSortHelper(array, mid + 1, right, animations);
            merge(array, left, mid, right, animations);
        }
    }
    
    function merge(array, left, mid, right, animations) {
        const leftArray = array.slice(left, mid + 1);
        const rightArray = array.slice(mid + 1, right + 1);
        let i = 0, j = 0, k = left;
    
        while (i < leftArray.length && j < rightArray.length) {
            // Compare elements
            animations.push({
                index: [left + i, mid + 1 + j],
                type: "compare"
            });
    
            if (leftArray[i] <= rightArray[j]) {
                // Overwrite main array at index k with leftArray[i]
                animations.push({
                    index: [k, leftArray[i]],
                    type: "overwrite"
                });
                array[k++] = leftArray[i++];
            } else {
                // Overwrite main array at index k with rightArray[j]
                animations.push({
                    index: [k, rightArray[j]],
                    type: "overwrite"
                });
                array[k++] = rightArray[j++];
            }
        }
    
        while (i < leftArray.length) {
            animations.push({
                index: [left + i, left + i],
                type: "compare"
            });
            animations.push({
                index: [k, leftArray[i]],
                type: "overwrite"
            });
            array[k++] = leftArray[i++];
        }
    
        while (j < rightArray.length) {
            animations.push({
                index: [mid + 1 + j, mid + 1 + j],
                type: "compare"
            });
            animations.push({
                index: [k, rightArray[j]],
                type: "overwrite"
            });
            array[k++] = rightArray[j++];
        }
    }
    

    function quickSort(array) {
        const animations = [];
        quickSortHelper(array, 0, array.length - 1, animations);
        return animations;
    }

    function quickSortHelper(array, low, high, animations) {
        if (low < high) {
            const pi = partition(array, low, high, animations);
            quickSortHelper(array, low, pi - 1, animations);
            quickSortHelper(array, pi + 1, high, animations);
        }
    }

    function partition(array, low, high, animations) {
        const pivot = array[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            animations.push({ index: [j, high], type: "compare" });

            if (array[j] < pivot) {
                i++;
                animations.push({ index: [i, j], type: "swap" });
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        animations.push({ index: [i + 1, high], type: "swap" });
        [array[i + 1], array[high]] = [array[high], array[i + 1]];

        return i + 1;
    }


    function heapSort(array) {
        const animations = [];
        const n = array.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(array, n, i, animations);
        }
        for (let i = n - 1; i > 0; i--) {
            animations.push({ index: [0, i], type: "swap" });
            [array[0], array[i]] = [array[i], array[0]];
            heapify(array, i, 0, animations);
        }
        return animations;
    }

    function heapify(array, n, i, animations) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        if (left < n) {
            animations.push({ index: [largest, left], type: "compare" });
            if (array[left] > array[largest]) {
                largest = left;
            }
        }
        if (right < n) {
            animations.push({ index: [largest, right], type: "compare" });
            if (array[right] > array[largest]) {
                largest = right;
            }
        }
        if (largest !== i) {
            animations.push({ index: [i, largest], type: "swap" });
            [array[i], array[largest]] = [array[largest], array[i]];
            heapify(array, n, largest, animations);
        }
    }


    function selectionSort(array) {
        const animations = [];
        const n = array.length;
        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < n; j++) {
                animations.push({ index: [j, minIdx], type: "compare" });
                if (array[j] < array[minIdx]) {
                    minIdx = j;
                }
            }
            if (minIdx !== i) {
                animations.push({ index: [i, minIdx], type: "swap" });
                [array[i], array[minIdx]] = [array[minIdx], array[i]];
            }
        }
        return animations;
    }


    function insertionSort(array) {
        const animations = [];
        const n = array.length;
        for (let i = 1; i < n; i++) {
            let key = array[i];
            let j = i - 1;

            // Compare key with elements in sorted part
            while (j >= 0 && array[j] > key) {
                animations.push({ index: [j, j + 1], type: "compare" });

                // Shift element one position ahead
                animations.push({ index: [j + 1, array[j]], type: "overwrite" });
                array[j + 1] = array[j];
                j--;
            }

            // Insert the key
            animations.push({ index: [j + 1, key], type: "overwrite" });
            array[j + 1] = key;
        }
        return animations;
    }


    function visualizeSorting() {
        let Animations = [];

        if (selectedAlgorithm === 'bubbleSort') {
            Animations = bubbleSort([...array]);
        } else if (selectedAlgorithm === 'selectionSort') {
            Animations = selectionSort([...array]);
        } else if (selectedAlgorithm === 'heapSort') {
            Animations = heapSort([...array]);
        } else if (selectedAlgorithm === 'quickSort') {
            Animations = quickSort([...array]);
        } else if (selectedAlgorithm === 'mergeSort') {
            Animations = mergeSort([...array]);
        } else if (selectedAlgorithm === 'insertionSort') {
            Animations = insertionSort([...array]);
        }

        setAnimations(Animations); // this triggers the useEffect above
    }

    
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'flex-end', height: '200px' }}>
                {array.map((value, idx) => (
                    <div
                        key={idx}
                        className="array-bar"
                        style={{
                            height: `${value}px`,
                            width: '20px',
                            margin: '0 2px',
                            backgroundColor: 'blue',
                        }}
                    ></div>
                ))}
            </div>
            <button onClick={resetArray}>Generate New Array</button>
            <button onClick={() => setSelectedAlgorithm('bubbleSort')}>Bubble Sort</button>
            <button onClick={() => setSelectedAlgorithm('mergeSort')}>Merge Sort</button>
            <button onClick={() => setSelectedAlgorithm('quickSort')}>Quick Sort</button>
            <button onClick={() => setSelectedAlgorithm('heapSort')}>Heap Sort</button>
            <button onClick={() => setSelectedAlgorithm('selectionSort')}>Selection Sort</button>
            <button onClick={() => setSelectedAlgorithm('insertionSort')}>Insertion Sort</button>
            <button onClick={visualizeSorting}>Visualize {selectedAlgorithm}</button>
        </div>
    );
};

export default SortingVisualizer;