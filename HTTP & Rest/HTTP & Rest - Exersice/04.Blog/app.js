function attachEvents() {
    const POSTS_URL = "http://localhost:3030/jsonstore/blog/posts";
    const COMMENTS_URL = "http://localhost:3030/jsonstore/blog/comments";
    const loadPostBtn = document.getElementById("btnLoadPosts");
    const viewPostBtn = document.getElementById("btnViewPost");
    const selectOption = document.getElementById("posts");
    const commentsUl = document.getElementById("post-comments");
    const h1Element = document.getElementById("post-title");
    const pElement = document.getElementById("post-body");
    let objectInfo;

    loadPostBtn.addEventListener("click", firstBtnEventHandler);
    viewPostBtn.addEventListener("click", secondBtnEventHandler);

    function firstBtnEventHandler() {
        selectOption.innerHTML = "";
        fetch(POSTS_URL)
            .then((postsResult) => postsResult.json())
            .then((postsData) => {
                let objResult = Object.values(postsData);
                objectInfo = objResult
                for (const currentOption of objResult) {
                    let newOption = document.createElement("option");
                    newOption.value = currentOption.id;
                    newOption.textContent = currentOption.title;
                    selectOption.appendChild(newOption)
                }
            })
            .catch(() => {
                console.error("Post fetch error")
            })
    }

    function secondBtnEventHandler() {
        commentsUl.innerHTML = "";
        fetch(COMMENTS_URL)
            .then((commentsResult) => commentsResult.json())
            .then((commentsData) => {
                let objCommentsResult = Object.values(commentsData);
                let currentSelected = selectOption.value;
                let allComments = objCommentsResult.filter((currentEl) => currentEl.postId === currentSelected);

                for (const currentComment of allComments) {
                    let newLi = document.createElement("li");
                    newLi.id = currentComment.id;
                    newLi.textContent = currentComment.text;
                    commentsUl.appendChild(newLi);
                }
                let currentCommentData = objectInfo.filter((currentObj) => currentObj.id === currentSelected)[0];
                h1Element.textContent = currentCommentData.title;
                pElement.textContent = currentCommentData.body;
            })
            .catch(() => {
                console.error("Comments fetch error")
            })
    }
}
attachEvents();