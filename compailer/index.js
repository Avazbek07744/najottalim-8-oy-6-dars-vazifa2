"use strict";
////?  Promise \\\\\
//!1 - topshiriq \\\\
// const urls: string[] = [
//     "https://jsonplaceholder.typicode.com/posts/1",
//     "https://jsonplaceholder.typicode.com/posts/2",
//     "https://jsonplaceholder.typicode.com/posts/3",
// ];
// function topshiriqOne(urls: string[]) {
//     urls.length && urls.map((v) => {
//         fetch(v)
//             .then(res => {
//                 return res.json()
//             })
//             .then(data=>{
//                 console.log(data);
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     })
// }
// topshiriqOne(urls);
//? 2-topshiriq \\\\\
// const url1: string = "https://jsonplaceholder.typicode.com/users";
// const url2: string = "https://jsonplaceholder.typicode.com/users";
// async function topshiriqTwo(a: string, b: string) {
//     try {
//         const [users, posts] = await Promise.all([
//             fetch(a).then((response) => response.json()),
//             fetch(b).then((response) => response.json()),
//         ]);
//         console.log("Users:", users);
//         console.log("Posts:", posts);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }
// topshiriqTwo(url1, url2);
//* 3-topshiriq
// const url1 = "https://jsonplaceholder.typicode.com/photos";
// const url2 = "https://jsonplaceholder.typicode.com/todos";
// const url3 = "https://jsonplaceholder.typicode.com/comments";
// async function topshiriqTree(a: string, b: string, c: string) {
//     try {
//         const firstResponse = await Promise.race([
//             fetch(a).then((response) => response.json()),
//             fetch(b).then((response) => response.json()),
//             fetch(c).then((response) => response.json()),
//         ]);
//         console.log("First Response:", firstResponse);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }
// topshiriqTree(url1, url2, url3);
////? async/await
//! 1-topshiriq \\\
// const urls = [
//     "https://jsonplaceholder.typicode.com/posts/1",
//     "https://jsonplaceholder.typicode.com/posts/2",
//     "https://jsonplaceholder.typicode.com/posts/3",
// ];
// const topshiriqOne = async (urls: string[]) => {
//     for (const url of urls) {
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             console.log(`Result:`, data);
//         } catch (error) {
//             console.error(error);
//         }
//     }
// };
// topshiriqOne(urls);
//? 2-topshiriq \\\
// const url1 = "https://jsonplaceholder.typicode.com/users";
// const url2 = "https://jsonplaceholder.typicode.com/posts";
// const topshiriqTwo = async () => {
//     try {
//         const [usersResponse, postsResponse] = await Promise.all([
//             fetch(url1),
//             fetch(url2),
//         ]);
//         const users = await usersResponse.json();
//         const posts = await postsResponse.json();
//         console.log("Fetched data:", [users, posts]);
//     } catch (error) {
//         console.error(error);
//     }
// };
// topshiriqTwo();
//* 3-topshiriq \\\
// const url1 = "https://jsonplaceholder.typicode.com/photos";
// const url2 = "https://jsonplaceholder.typicode.com/todos";
// const url3 = "https://jsonplaceholder.typicode.com/comments";
// const topshiriqTree = async () => {
//     const urls = [url1, url2, url3];
//     for (const url of urls) {
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             console.log("First successful request result:", data);
//             return;
//         } catch (error) {
//             console.error(error);
//         }
//     }
// };
// topshiriqTree();
////! Generic \\\\\
//! 1-topshiriq \\\\
// function WData<T>(data: T): { status: string; data: T } {
//     return {
//         status: "success",
//         data,
//     };
// }
// const str = WData("azizbek");
// console.log(str);
// const num = WData(16);
// console.log(num);
// const obj = WData({ id: 1, name: "Azizbek" });
// console.log(obj);
//? 2-topshiriq \\\\
// function topshirqTwo<T>(arr1: T[], arr2: T[]): T[] {
//     return arr1.filter(item => arr2.includes(item));
// }
// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];
// const num = topshirqTwo(arr1, arr2);
// console.log(num);
// const str1 = ["apple", "banana", "cherry"];
// const str2 = ["banana", "cherry", "date"];
// const commonStrings = topshirqTwo(str1, str2);
// console.log(commonStrings);
