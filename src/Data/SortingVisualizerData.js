const Data = {
    bubbleSort: {
        Description: {
            para1:
                "Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles in sparkling water. The bubbles represent the elements of the data structure.",
            para2:
                "The bigger bubbles reach the top faster than smaller bubbles, and this algorithm works in the same way. It iterates through the data structure and for each cycle compares the current element with the next one, swapping them if they are in the wrong order.",
            para3: {
                prefix: `It's a simple algorithm to implement, but not much efficient: on average, quadratic sorting algorithms with the same time complexity such as `,
                links: [
                    { label: 'Selection Sort', type: 'clickable', onClickId: 'selectionSort' },
                    { label: 'Insertion Sort', type: 'clickable', onClickId: 'insertionSort' }
                ],
                suffix: ' perform better.'
            }
        }
    },

    mergeSort: {
        Description: {
            para1: {
                prefix: 'Merge Sort is a sorting algorithm based on the Divide et Impera technique, like ',
                links: [
                    { label: 'Quick Sort', type: 'clickable', onClickId: 'quickSort' }
                ],
                suffix: '. It can be implemented iteratively or recursively, using the Top-Down and Bottom-Up algorithms respectively.'
            },
            para2: 'The algorithm divides the data structure recursively until the subsequences contain only one element. At this point, the subsequences get merged and ordered sequentially. To do so, the algorithm progressively builds the sorted sublist by adding each time the minimum element of the next two unsorted subsequences until there is only one sublist remaining. This will be the sorted data structure.'
        }
    },

    quickSort: {
        Description: {
            para1: "Quick Sort is a sorting algorithm based on splitting the data structure in smaller partitions and sort them recursively until the data structure is sorted.",
            para2: "This division in partitions is done based on an element, called pivot: all the elements bigger than the pivot get placed on the right side of the structure, the smaller ones to the left, creating two partitions. Next, this procedure gets applied recursively to the two partitions and so on.",
            para3: {
                parts: [
                    { type: 'text', content: 'This partition technique based on the pivot is called ' },
                    { type: 'clickable', label: 'Divide and Conquer', onClickId: 'divideAndConquer' },
                    { type: 'text', content: ". It's a performant strategy also used by other sorting algorithms, such as " },
                    { type: 'clickable', label: 'Merge Sort', onClickId: 'mergeSort' },
                    { type: 'text', content: '.' }
                ]
            }
        }
    },

    heapSort: {
        Description: {
            para1: "Heap Sort is an in-place iterative sorting algorithm based on auxiliary data structures called heap. It's less efficient than algorithm with the same time complexity and it's not suitable for data structures with few elements.",
            para2: "The heap is a data structure representable as a binary tree, where each node has a value bigger or equal to its children. Consequently, the root will hold the maximum value.",
            para3: {
                parts: [
                    { type: 'text', content: 'The data structure gets ordered to form the heap initially, and then it gets progressively reordered with an algorithm similar to ' },
                    { type: 'clickable', label: 'Selection Sort', onClickId: 'selectionSort' },
                    { type: 'text', content: ', starting from the bigger elements.'}
                ]
            }
        }
    },

    selectionSort: {
        
    },
};

export default Data;  