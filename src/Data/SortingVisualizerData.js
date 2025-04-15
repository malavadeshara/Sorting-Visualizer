const Data = {
    bubbleSort: {
        Description: {
            para1:
                "Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles in sparkling water. The bubbles represent the elements of the data structure.",
            para2:
                "The bigger bubbles reach the top faster than smaller bubbles, and this algorithm works in the same way. It iterates through the data structure and for each cycle compares the current element with the next one, swapping them if they are in the wrong order.",
            para3: {
                parts: [
                    { type: 'text', content: `It's a simple algorithm to implement, but not much efficient: on average, quadratic sorting algorithms with the same time complexity such as `, },
                    { type: 'clickable', label: 'Selection Sort', onClickId: 'selectionSort' },
                    { type: 'clickable', label: 'Insertion Sort', onClickId: 'insertionSort' },
                    { type: 'text', content: ' perform better.' }
                ],
            }
        },
        timeComplexity: {
            best: "O(n)",
            average: "O(n²)",
            worst: "O(n²)"
        },
        spaceComplexity: "O(1)",
        code: {
            c:
`void bubble_sort(long arr[], long n) {
  long c, d, t;

  for (c = 0 ; c < n - 1; c++) {
    for (d = 0 ; d < n - c - 1; d++) {
      if (arr[d] > arr[d+1]) {
        t = arr[d];
        arr[d] = arr[d+1];
        arr[d+1] = t;
      }
    }
  }
}`,

            cpp:
`void swap(int *xp, int *yp) {
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

void bubbleSort(int arr[], int n) {
    int i, j;
    for (i = 0; i < n-1; i++)
        for (j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1])
                swap(&arr[j], &arr[j+1]);
}`,

            java:
`static void bubbleSort(int[] arr) {
    int n = arr.length;
    int temp = 0;
    for(int i=0; i < n; i++){
        for(int j=1; j < (n-i); j++){
            if(arr[j-1] > arr[j]){
                temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}`,

            javascript:
`function bubbleSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < ( arr.length - i -1 ); j++) {
            if(arr[j] > arr[j+1]) {
              var temp = arr[j]
              arr[j] = arr[j + 1]
              arr[j+1] = temp
            }
        }
    }
}`,

            python:
`def bubbleSort(arr):
    n = len(arr)
    for i in range(n-1):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]`,
        }
    },

    mergeSort: {
        Description: {
            para1: {
                parts: [
                    { type: 'text', content: 'Merge Sort is a sorting algorithm based on the Divide et Impera technique, like ', },
                    { type: 'clickable', label: 'Quick Sort', onClickId: 'quickSort' },
                    { type: 'text', content: '. It can be implemented iteratively or recursively, using the Top-Down and Bottom-Up algorithms respectively.' }
                ]
            },
            para2: 'The algorithm divides the data structure recursively until the subsequences contain only one element. At this point, the subsequences get merged and ordered sequentially. To do so, the algorithm progressively builds the sorted sublist by adding each time the minimum element of the next two unsorted subsequences until there is only one sublist remaining. This will be the sorted data structure.'
        },
        timeComplexity: {
            best: "O(n log n)",
            average: "O(n log n)",
            worst: "O(n log n)"
        },
        spaceComplexity: "O(n)",
        code: {
            c:
`void merge(int arr[], int l, int m, int r)
{
    int i, j, k;
    int n1 = m - l + 1;
    int n2 = r - m;

    int L[n1], R[n2];

    for (i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    i = 0;
    j = 0;
    k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int l, int r)
{
    if (l < r) {
        int m = l + (r - l) / 2;

        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`,

            cpp:
`void merge(int *array, int l, int m, int r) {
   int i, j, k, nl, nr;
   nl = m-l+1; nr = r-m;
   int larr[nl], rarr[nr];

   for(i = 0; i<nl; i++)
      larr[i] = array[l+i];

   for(j = 0; j<nr; j++)
      rarr[j] = array[m+1+j];

   i = 0; j = 0; k = l;

   while(i < nl && j<nr) {
      if(larr[i] <= rarr[j]) {
         array[k] = larr[i];
         i++;
      } else {
         array[k] = rarr[j];
         j++;
      }
      k++;
   }
   while(i<nl) {
      array[k] = larr[i];
      i++; k++;
   }
   while(j<nr) {
      array[k] = rarr[j];
      j++; k++;
   }
}

void mergeSort(int *array, int l, int r) {
   int m;
   if(l < r) {
      int m = l+(r-l)/2;

      mergeSort(array, l, m);
      mergeSort(array, m+1, r);
      merge(array, l, m, r);
   }
}`,

            java:
`void merge(int arr[], int l, int m, int r)
{
    int n1 = m - l + 1;
    int n2 = r - m;

    int L[] = new int[n1];
    int R[] = new int[n2];

    for (int i = 0; i < n1; ++i)
        L[i] = arr[l + i];
    for (int j = 0; j < n2; ++j)
        R[j] = arr[m + 1 + j];

    int i = 0, j = 0;

    int k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void sort(int arr[], int l, int r)
{
    if (l < r) {
        int m =l+ (r-l)/2;

        sort(arr, l, m);
        sort(arr, m + 1, r);

        merge(arr, l, m, r);
    }
}`,

            javascript:
`function mergeSort(array) {
  const half = array.length / 2

  if (array.length < 2){
    return array
  }

  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}

function merge(left, right) {
    let arr = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    return [ ...arr, ...left, ...right ]
}`,

            python:
`def mergeSort(arr):
    if len(arr) > 1:
        mid = len(arr)//2
        L = arr[:mid]
        R = arr[mid:]

        mergeSort(L)
        mergeSort(R)

        i = j = k = 0

        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
`,
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
        },
        timeComplexity: {
            best: "O(n log n)",
            average: "O(n log n)",
            worst: "O(n²)"
        },
        spaceComplexity: "O(log n)",
        code: {
            c:
`void swap(int *a, int *b) {
  int t = *a;
  *a = *b;
  *b = t;
}

int partition(int array[], int low, int high) {

  int pivot = array[high];
  int i = (low - 1);

  for (int j = low; j < high; j++) {
    if (array[j] <= pivot) {
      i++;
      swap(&array[i], &array[j]);
    }
  }

  swap(&array[i + 1], &array[high]);
  return (i + 1);
}

void quickSort(int array[], int low, int high) {
  if (low < high) {

    int pi = partition(array, low, high);

    quickSort(array, low, pi - 1);

    quickSort(array, pi + 1, high);
  }
}`,

            cpp:
`void swap(int* a, int* b)
{
    int t = *a;
    *a = *b;
    *b = t;
}

int partition (int arr[], int low, int high)
{
    int pivot = arr[high];
    int i = (low - 1);

    for (int j = low; j <= high- 1; j++)
    {
        if (arr[j] <= pivot)
        {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high)
{
    if (low < high)
    {
        int pivot = partition(arr, low, high);

        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
}`,

            java:
`public void quickSort(int arr[], int begin, int end) {
    if (begin < end) {
        int partitionIndex = partition(arr, begin, end);

        quickSort(arr, begin, partitionIndex-1);
        quickSort(arr, partitionIndex+1, end);
    }
}

private int partition(int arr[], int begin, int end) {
    int pivot = arr[end];
    int i = (begin-1);

    for (int j = begin; j < end; j++) {
        if (arr[j] <= pivot) {
            i++;

            int swapTemp = arr[i];
            arr[i] = arr[j];
            arr[j] = swapTemp;
        }
    }

    int swapTemp = arr[i+1];
    arr[i+1] = arr[end];
    arr[end] = swapTemp;

    return i+1;
}`,

            javascript:
`function quickSort(array, start, end) {
  if (start === undefined) {
    start = 0;
    end = array.length - 1;
  } else if (start >= end) {
    return array;
  }
  var rStart = start, rEnd = end;
  var pivot = array[Math.floor(Math.random() * (end - start + 1) + start)];
  while (start < end) {
    while (array[start] <= pivot) start++;
    while (array[end] > pivot) end--;
    if (start < end) {
      var temp = array[start];
      array[start] = array[end];
      array[end] = temp;
    }
  }
  quickSort(array, rStart, start - 1);
  quickSort(array, start, rEnd);
}`,

            python:
`def partition(array, start, end):
    pivot = array[start]
    low = start + 1
    high = end

    while True:
        while low <= high and array[high] >= pivot:
            high = high - 1

        while low <= high and array[low] <= pivot:
            low = low + 1

        if low <= high:
            array[low], array[high] = array[high], array[low]
        else:
            break

    array[start], array[high] = array[high], array[start]

    return high

def quick_sort(array, start, end):
    if start >= end:
        return

    p = partition(array, start, end)
    quick_sort(array, start, p-1)
    quick_sort(array, p+1, end)`,
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
                    { type: 'text', content: ', starting from the bigger elements.' }
                ]
            }
        },
        timeComplexity: {
            best: "O(n log n)",
            average: "O(n log n)",
            worst: "O(n log n)"
        },
        spaceComplexity: "O(1)",
        code: {
            c:
`void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void heapify(int arr[], int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest])
      largest = left;

    if (right < n && arr[right] > arr[largest])
      largest = right;

    if (largest != i) {
      swap(&arr[i], &arr[largest]);
      heapify(arr, n, largest);
    }
}

void heapSort(int arr[], int n) {
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    for (int i = n - 1; i >= 0; i--) {
        swap(&arr[0], &arr[i]);
        heapify(arr, i, 0);
    }
}`,

            cpp:
`void heapify(int arr[], int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest])
      largest = left;

    if (right < n && arr[right] > arr[largest])
      largest = right;

    if (largest != i) {
      swap(arr[i], arr[largest]);
      heapify(arr, n, largest);
    }
}

void heapSort(int arr[], int n) {
    for (int i = n / 2 - 1; i >= 0; i--)
      heapify(arr, n, i);

    for (int i = n - 1; i >= 0; i--) {
      swap(arr[0], arr[i]);
      heapify(arr, i, 0);
    }
}`,

            java:
`public void sort(int arr[]) {
      int n = arr.length;

      for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
      }

      for (int i = n - 1; i >= 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        heapify(arr, i, 0);
      }
}

void heapify(int arr[], int n, int i) {
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest])
        largest = l;

    if (r < n && arr[r] > arr[largest])
        largest = r;

    if (largest != i) {
        int swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        heapify(arr, n, largest);
    }
}`,

            javascript:
`function heapSort(array) {
  let size = array.length

  for (let i = Math.floor(size / 2 - 1); i >= 0; i--)
    heapify(array, size, i)

  for (let i = size - 1; i >= 0; i--) {
    let temp = array[0]
    array[0] = array[i]
    array[i] = temp
    heapify(array, i, 0)
  }
}

function heapify(array, size, i) {
  let max = i
  let left = 2 * i + 1
  let right = 2 * i + 2

  if (left < size && array[left] > array[max])
    max = left

  if (right < size && array[right] > array[max])
    max = right

  if (max != i) {
    let temp = array[i]
    array[i] = array[max]
    array[max] = temp

    heapify(array, size, max)
  }
}`,

            python:
`def heapify(arr, n, i):
  largest = i
  l = 2 * i + 1
  r = 2 * i + 2

  if l < n and arr[i] < arr[l]:
      largest = l

  if r < n and arr[largest] < arr[r]:
      largest = r

  if largest != i:
      arr[i], arr[largest] = arr[largest], arr[i]
      heapify(arr, n, largest)


def heapSort(arr):
  n = len(arr)

  for i in range(n//2, -1, -1):
      heapify(arr, n, i)

  for i in range(n-1, 0, -1):
      arr[i], arr[0] = arr[0], arr[i]

      heapify(arr, i, 0)`,
        }
    },

    selectionSort: {
        Description: {
            para1: "Selection Sort is an iterative and in-place sorting algorithm that divides the data structure in two sublists: the ordered one, and the unordered one. The algorithm loops for all the elements of the data structure and for every cycle picks the smallest element of the unordered sublist and adds it to the sorted sublist, progressively filling it.",
            para2: "It's a really simple and intuitive algorithm that does not require additional memory, but it's not really efficient on big data structures due to its quadratic time complexity.",
            para3: {
                parts: [
                    { type: 'text', content: 'This algorithm has been upgraded and enhanced in several variants such as ' },
                    { type: 'clickable', label: 'Heap Sort', onClickId: 'heapSort' },
                    { type: 'text', content: '.' }
                ]
            }
        },
        timeComplexity: {
            best: "O(n²)",
            average: "O(n²)",
            worst: "O(n²)"
        },
        spaceComplexity: "O(1)",
        code: {
            c:
`void swap(int *xp, int *yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

void selectionSort(int arr[], int n)
{
    int i, j, min_idx;

    for (i = 0; i < n-1; i++)
    {
        min_idx = i;
        for (j = i+1; j < n; j++)
          if (arr[j] < arr[min_idx])
            min_idx = j;

        swap(&arr[min_idx], &arr[i]);
    }
}`,

            cpp:
`void swap(int *xp, int *yp) {
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

void selectionSort(int arr[], int n) {
    int i, j, min_idx;

    for (i = 0; i < n-1; i++) {
        min_idx = i;
        for (j = i+1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;

        swap(&arr[min_idx], &arr[i]);
    }
}`,

            java:
`void selectionSort(int arr[])
{
    int n = arr.length;

    for (int i = 0; i < n-1; i++)
    {
        int min_idx = i;
        for (int j = i+1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;

        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}`,

            javascript:
`function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        let min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (i != min) {
            [arr[ i ],arr[min]]= [arr[min],arr[ i ]];
        }
    }
    return arr
}`,

            python:
`def selection_sort(A):
    for i in range(len(A)):
        min_idx = i
        for j in range(i+1, len(A)):
            if A[min_idx] > A[j]:
                min_idx = j
        A[i], A[min_idx] = A[min_idx], A[i]`,
        }
    },

    insertionSort: {
        Description: {
            para1: "Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It's less performant than advanced sorting algorithms, but it can still have some advantages: it's really easy to implement and it's efficient on small data structures almost sorted.",
            para2: "The algorithm divides the data structure in two sublists: a sorted one, and one still to sort. Initially, the sorted sublist is made up of just one element and it gets progressively filled. For every iteration, the algorithm picks an element on the unsorted sublist and inserts it at the right place in the sorted sublist.",
        },
        timeComplexity: {
            best: "O(n)",
            average: "O(n²)",
            worst: "O(n²)"
        },
        spaceComplexity: "O(1)",
        code: {
            c:
`void insertionSort(int arr[], int n)
{
    int i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`,

            cpp:
`void insertionSort(int arr[], int n)
{
    int i, key, j;
    for (i = 1; i < n; i++)
    {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`,

            java:
`void insertionSort(int arr[])
{
       int n = arr.length;
       for (int i = 1; i < n; ++i) {
           int key = arr[i];
           int j = i - 1;

           while (j >= 0 && arr[j] > key) {
               arr[j + 1] = arr[j];
               j = j - 1;
           }
           arr[j + 1] = key;
       }
}`,

            javascript:
`function insertionSort(arr, n)
{
    let i, key, j;
    for (i = 1; i < n; i++)
    {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`,

            python:
`def insertionSort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i-1
        while j >= 0 and key < arr[j] :
                arr[j + 1] = arr[j]
                j -= 1
        arr[j + 1] = key`,
        }
    }
};

export default Data;  