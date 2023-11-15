let a=[3,87,2,34,53];
sort(a,5);
console.log(a);

function sort(arr,size)
{
    let maxindex;
    for(i=0;i<size-1;i++)
    {
        maxindex=i;
        //finding maximum element
        for(j=i+1;j<size;j++)
        {
            if(arr[maxindex]<arr[j])
                maxindex=j;
        }
        //swaping
        let temp=arr[i];
        arr[i]=arr[maxindex];
        a[maxindex]=temp;
    }

}




