# Diferencia entre una busqueda binaria iterativa y recursiva

La búsqueda binaria es un algoritmo de búsqueda eficiente que se utiliza para encontrar un elemento en un arreglo ordenado. Existen dos formas de implementar la búsqueda binaria: iterativa y recursiva.

## Búsqueda Binaria Iterativa

La búsqueda binaria iterativa utiliza un bucle para reducir el espacio de búsqueda a la mitad en cada iteración. Primero, se establece el índice del inicio y el final del arreglo, luego se calcula el índice medio. Si el elemento medio es igual al elemento buscado, la búsqueda se completa. Si el elemento medio es mayor que el elemento buscado, se actualiza el índice final al índice medio menos uno. Si el elemento medio es menor que el elemento buscado, se actualiza el índice de inicio al índice medio más uno. Este proceso se repite hasta que se encuentra el elemento buscado o se agota el espacio de búsqueda codegym.cc delftstack.com.

Aquí hay un ejemplo de código en Java para la búsqueda binaria iterativa:

```
class BinarySearch {
    int binarySearch(int arr[], int x)
    {
        int lo = 0, hi = arr.length - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (arr[mid] == x)
                return mid;
            if (arr[mid] < x)
                lo = mid + 1;
            else
                hi = mid - 1;
        }
        return -1;
    }
    public static void main(String args[])
    {
        BinarySearch ob = new BinarySearch();
        int arr[] = { 1, 2, 3, 4, 5 };
        int n = arr.length;
        int x = 2;
        int position = ob.binarySearch(arr, x);
        if (position == -1)
            System.out.println("Element not present");
        else
            System.out.println("Element found at index: " + position);
    }
}

```

## Búsqueda Binaria Recursiva

La búsqueda binaria recursiva utiliza la recursión para reducir el espacio de búsqueda a la mitad en cada iteración. La función se llama a sí misma con los nuevos límites de búsqueda hasta que se encuentra el elemento buscado o se agota el espacio de búsqueda codegym.cc delftstack.com.

Aquí hay un ejemplo de código en Java para la búsqueda binaria recursiva:

```
class BinarySearch {
    int binarySearch(int arr[], int lo, int hi, int x) {
        if (hi >= lo && lo < arr.length - 1) {
            int mid = lo + (hi - lo) / 2;
            if (arr[mid] == x)
                return mid;
            if (arr[mid] > x)
                return binarySearch(arr, lo, mid - 1, x);
            return binarySearch(arr, mid + 1, hi, x);
        }
        return -1;
    }
    public static void main(String args[]) {
        BinarySearch ob = new BinarySearch();
        int arr[] = { 1, 2, 3, 4, 5 };
        int n = arr.length;
        int x = 2;
        int position = ob.binary```

```
