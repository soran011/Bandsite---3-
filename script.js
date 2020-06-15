axios
    .get('https://project-1-api.herokuapp.com/comments?api_key=abcd6e9b-5ac9-4349-aeab-88f1160f6c6b')
    .then((response) => {
        const comments = response.data
        const container = document.getElementsByClassName('comment__all')[0]
        comments.forEach((comment) => {

            const node = prepareCommentNode(comment);
            container.appendChild(node);
        })
    })

let input = document.getElementsByTagName("input")[0]

function prepareCommentNode(comment) {
    let node = document.createElement("div");
    node.className = 'comment__all--item';

    let text = document.createElement("div");
    text.className = 'comment__all--item__text';
    text.innerHTML = comment.comment;
    let name = document.createElement("div");
    name.className = 'comment__all--item__name';
    name.innerHTML = comment.name;
    let time = document.createElement("div");
    time.className = 'comment__all--item__time';
    time.innerHTML = new Date(comment.timestamp);
    node.appendChild(name);
    node.appendChild(text);
    node.appendChild(time);
    return node;
}

function handleOnClick() {
    let name = document.getElementsByTagName('textarea')[0]
    let commentNode = document.getElementsByTagName('textarea')[1]
    if (!name.value && !commentNode.value){
        alert("Please Fill All Flieds")
        return
    }
    axios   
        .post('https://project-1-api.herokuapp.com/comments?api_key=abcd6e9b-5ac9-4349-aeab-88f1160f6c6b', {
            name: name.value,
            comment: commentNode.value
        })
        .then((response) => {
            const comment = response.data; 
            const node = prepareCommentNode(comment)
            const container = document.getElementsByClassName('comment__all')[0]
            container.appendChild(node)

            name.value = "";
            commentNode.value = "" 
        })
    
}

input.addEventListener('click', handleOnClick)



