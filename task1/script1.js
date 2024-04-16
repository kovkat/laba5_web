let n = prompt("Введіть кількість елементів масиву:");
console.log(n);
let arr=new Array();


function our_array(Array, num){
    for(i=0; i< num; i++){
        let a= Math.round(Math.random()*100);
        Array[i]=a;
        document.write('<br>'+Array[i]);
    }
}

function unpar_arr(Array){
    let num =Array.length;
    let min = Array[0];
    let max = Array[0];
    for (i=0; i<num; i+=2){
        if (Array[i]<min)
            min=Array[i];
        if (Array[i]>max)
            max=Array[i];
    }
    document.write('<br>Найбільший елемент серед непарних чисел:'+ max);
    document.write('<br>Найменший елемент серед непарних чисел:'+ min);
}

function par_arr(Array){
    let num =Array.length;
    let min =Array[1];
    let max = Array[1];
    for (i=1; i<num; i+=2){
        if (Array[i]<min)
            min=Array[i];
        if (Array[i]>max)
            max=Array[i];
    }
    document.write('<br>Найбільший елемент серед парних чисел:'+ max);
    document.write('<br>Найменший елемент серед парних чисел:'+ min);
}

function sort(Array){
    let num = Array.length;
	for(i=0;i<num-1;i++){
		let max = i;
		for(let j=i+1;j<num;j++){
			if(Array[j]>Array[max])max=j;
		}
	let t=Array[max];
	Array[max]=Array[i];
	Array[i]=t;
	}
    document.write('<br><br><i><b>Відсотований масив:</b></i><br>');
	for(i=0;i<num; i++){
        document.write('<br>'+Array[i]);
    }
}

our_array(arr, n);
unpar_arr(arr);
par_arr(arr);
sort(arr);