// Arrays in TypeScript 

const arr1: string[] = [];
arr1.push("string1");

const arr2 : Array<number> = [];
arr2.push(2,5,6);

type Pet = {
  name: string;
  age: number;
};

const pet_arr : Pet[] = [];
pet_arr.push({name:"dog",age:2});

const arr_of_arr: number[][] = [];

arr_of_arr.push( [1,1,1] , [2,2,2] );
