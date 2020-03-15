const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {    
    setTimeout(() => {
        posts.push(post)

        const err =  false;

        if (!err) {
            resolve();
        } else {
            reject('Error: something went wrong')
        }
    }, 2000)
});
}

// createPost({ title: 'Post Three', body: 'This is post three' })
// .then(getPost)
// .catch(err => console.log(err))

// Promise.all

const promise1 = Promise.resolve('Hello world');
const promise2 = 14
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye')
})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then(((res) =>console.log(res))) 