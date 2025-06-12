/* Content for assets/js/app.js */

document.addEventListener('DOMContentLoaded', () => {
    const postContainer = document.getElementById('post-container');

    function fetchPosts() {
        fetch('api/get_posts.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(posts => {
                displayPosts(posts);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                postContainer.innerHTML = '<p>Failed to load posts.</p>';
            });
    }

    function displayPosts(posts) {
        if (!posts || posts.length === 0) {
            postContainer.innerHTML = '<p>No posts to display.</p>';
            return;
        }

        postContainer.innerHTML = ''; // Clear existing content

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post'); // Add a class for styling

            // Use backticks for template literals
            postElement.innerHTML = `
                <div class="bg-white shadow-md rounded-lg p-4 mb-4">
                    <div class="flex items-center mb-2">
                        <img src="${post.profile_picture ? post.profile_picture : 'assets/img/default_profile.png'}" alt="Profile Picture" class="w-8 h-8 rounded-full mr-2">
                        <span class="font-semibold">${post.first_name} ${post.last_name}</span>
                    </div>
                    <p class="text-gray-700">${post.content}</p>
                    ${post.image_url ? `<img src="${post.image_url}" alt="Post Image" class="mt-2 rounded-md">` : ''}
                    ${post.video_url ? `<video src="${post.video_url}" controls class="mt-2 rounded-md"></video>` : ''}
                    <div class="flex justify-between mt-2">
                        <small class="text-gray-500">${new Date(post.created_at).toLocaleString()}</small>
                        <div>
                            <button class="like-button text-blue-500 hover:text-blue-700 focus:outline-none" data-post-id="${post.id}">Like</button>
                            <button class="comment-button text-green-500 hover:text-green-700 focus:outline-none" data-post-id="${post.id}">Comment</button>
                        </div>
                    </div>
                </div>
            `;
            postContainer.appendChild(postElement);
        });

        // Add event listeners to the like and comment buttons
        const likeButtons = document.querySelectorAll('.like-button');
        likeButtons.forEach(button => {
            button.addEventListener('click', handleLike);
        });

        const commentButtons = document.querySelectorAll('.comment-button');
        commentButtons.forEach(button => {
            button.addEventListener('click', handleComment);
        });
    }

    function handleLike(event) {
        const postId = event.target.dataset.postId;
        // Implement like functionality here (e.g., call an API endpoint)
        console.log(`Like button clicked for post ID: ${postId}`);
        // Example API call:
        fetch('api/like_post.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ post_id: postId })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Update UI to reflect like status
                console.log('Post liked successfully');
            } else {
                console.error('Error liking post:', data.message);
            }
        })
        .catch(error => console.error('Error liking post:', error));
    }

    function handleComment(event) {
        const postId = event.target.dataset.postId;
        // Implement comment functionality here (e.g., show a comment form)
        console.log(`Comment button clicked for post ID: ${postId}`);
    }


    // Initial fetch of posts when the page loads
    fetchPosts();
});