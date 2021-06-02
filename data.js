var defaultThreads = [
    {
        id: 1,
        title: "Editor Bugs",
        author: "User",
        date: Date.now(),
        content: "Thread content",
        comments: [
            
            {
                author: "@reeceypie",
                date: Date.now(),
                content: "Hello! Welcome To The Forum!"
            }
        ]
    },
    {
        id: 2,
        title: "Site Page",
        author: "User",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            
            {
                author: "@reeceypie",
                date: Date.now(),
                content: "Hello World!"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}